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
        App.ajaxSetupDefault();
        connectionDB(this.__db_name, this.__db_size);
        createTable();
        AppCache.clearAll();
        HomeController.start();
    },
    ajaxSetupDefault: function () {
        $.ajax({
            type: "GET",
            datatype: "JSON",
            crossDomain: true,
            beforeSend: function () {
                ViewLoading.setBusy(true);
            },
            afterSend: function () {
                ViewLoading.setBusy(true);
            },
            complete: function () {
                ViewLoading.setBusy(false);
            },
            error: function () {
                ViewLoading.setBusy(true);
            }
        });
    },
    isOnline: function () {
        var online = false;
        if (navigator.connection) {
            online = (navigator.connection.type !== Connection.NONE);
            return online;
        }
        online = navigator.onLine; //browser
        return online;
    },
    checkConnection: function () {
        var networkState = navigator.connection.type;
        var states = {};
        states[Connection.UNKNOWN] = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI] = 'WiFi connection';
        states[Connection.CELL_2G] = 'Cell 2G connection';
        states[Connection.CELL_3G] = 'Cell 3G connection';
        states[Connection.CELL_4G] = 'Cell 4G connection';
        states[Connection.CELL] = 'Cell generic connection';
        states[Connection.NONE] = 'No network connection';
        alert('Connection type: ' + states[networkState]);
    },
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
    }
};
App.initialize()