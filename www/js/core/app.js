//var URL = "http://localhost:8088/Ad-ngos/";
var URL = "http://www.camngo.website/";

var App = {
    __db_size: 10 * 1024 * 124,
    __db_name: 'ngos',
    initialize: function () {
        App.bindEvents();
    },
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
//        window.addEventListener("offline", function (e) {
//            console.log("offline");
//        });
//        window.addEventListener("online", function (e) {
//            console.log("online");
//        });
    },
    resetDB: function () {
        persistence.reset();
        persistence.schemaSync();
    },
    onDeviceReady: function () {
        connectionDB(this.__db_name, this.__db_size);
        createTable();
        AppCache.clearAll();
        HomeController.start();
    },
    ajaxRequest: function (url, successCallback) {
        $.ajax({
            type: "GET",
            datatype: "JSON",
            crossDomain: true,
            url: URL + url,
            success: successCallback,
            beforeSend: function () {
                ViewLoading.setBusy("កំពុងតភ្ជាប់ទៅម៉ាស៊ីនមេ", true);
            },
            afterSend: function () {
                ViewLoading.setBusy("ការតភ្ជាប់បានសម្រេច", true);
            },
            complete: function () {
                ViewLoading.setBusy(null, false);
            },
            error: function (e) {
                ViewLoading.setBusy("ការតភ្ជាប់បរាជ័យ", true);
            }
        });
    },
    isOnline: function () {
        var online = false;
        if (navigator.connection) {
            online = (navigator.connection.type !== Connection.NONE);
            console.log("navigator");
            return online;
        }
        online = navigator.onLine; //browser
        return online;
    },
    Toast: function (msg) {
        $.mobile.toast({
            message: msg
        });
    },
    onExite: function ()
    {
        if (navigator.app) {
            navigator.app.exitApp();
        } else if (navigator.device) {
            navigator.device.exitApp();
        }
    },
    dialog: function (output_msg, title_msg)
    {
        console.log("dialog");
        if (!title_msg)
            title_msg = 'Alert';
        if (!output_msg)
            output_msg = 'No Message to Display.';
        $("<div></div>").html(output_msg).dialog({
            title: title_msg,
            resizable: false,
            modal: true,
            buttons: {
                "Ok": function ()
                {
                    $(this).dialog("close");
                }
            }
        });
    },
    refresh: function () {
        HomeController.start();
    },
    getMap: function (taget, latlong) {
        Map.get(taget, latlong);
    }
};
App.initialize();
