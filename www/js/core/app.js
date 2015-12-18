//var URL = "http://localhost:8088/Ad-ngos/";
var URL = "http://www.camngo.website/";
var App = {
    __db_size: 10 * 1024 * 124,
    __db_name: 'ngos',
    initialize: function () {
        App.bindEvents();
        App.ajaxSetupDefault();
    },
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        window.addEventListener("offline", function (e) {
            console.log("offline");
        });
        window.addEventListener("online", function (e) {
            console.log("online");
        });
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
        //alert("Fucken check online");
        //App.checkConnection();
//        if (navigator.onLine) {           
//            return true;
//        } else {            
//            return false;
//        }
        var online = false;
        if (navigator.connection) {
            online = (navigator.connection.type !== Connection.NONE);            
            return online;
        }
        online = navigator.onLine; //browser
        return online;
        return true;
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
    }
};
