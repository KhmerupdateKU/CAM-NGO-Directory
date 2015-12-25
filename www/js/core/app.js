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
                ViewLoading.setBusy("", true, true);
            },
            afterSend: function () {
                ViewLoading.setBusy("", true, true);
            },
            complete: function () {
                ViewLoading.setBusy(null, false, false);
            },
            error: function (e) {
                alert("ពុំអាចទាញទិន្នន័យពីម៉ាស៊ីនមេបាន៕");
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
//    checkConnection: function () {
//        var networkState = navigator.connection.type;
//        var states = {};
//        states[Connection.UNKNOWN] = 'Unknown connection';
//        states[Connection.ETHERNET] = 'Ethernet connection';
//        states[Connection.WIFI] = 'WiFi connection';
//        states[Connection.CELL_2G] = 'Cell 2G connection';
//        states[Connection.CELL_3G] = 'Cell 3G connection';
//        states[Connection.CELL_4G] = 'Cell 4G connection';
//        states[Connection.CELL] = 'Cell generic connection';
//        states[Connection.NONE] = 'No network connection';
//        alert('Connection type: ' + states[networkState]);
//    },
    Toast: function (msg) {
        $.mobile.toast({
            message: msg
        });
//        $("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><h3>" + msg + "</h3></div>")
//                .css({display: "block",
//                    "font-size": "12px",
//                    opacity: 0.90,
//                    position: "fixed",
//                    padding: "7px",
//                    "text-align": "center",
//                    width: "270px",
//                    left: ($(window).width() - 284) / 2,
//                    top: $(window).height() / 1.5})
//                .appendTo($.mobile.pageContainer).delay(1500)
//                .fadeOut(400, function () {
//                    $(this).remove();
//                });
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
    }

};
App.initialize()