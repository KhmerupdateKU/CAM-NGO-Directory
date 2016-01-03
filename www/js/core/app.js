var URL = "http://www.camngo.website/";
var App = {
    __db_size: 10 * 1024 * 124,
    __db_name: 'ngos',
    initialize: function () {
        App.bindEvents();
    },
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    resetDB: function () {
        persistence.reset();
        persistence.schemaSync();
    },
    onDeviceReady: function () {        
        connectionDB(this.__db_name, this.__db_size);
        createTable();
        HomeController.start();
    },
    ajaxRequest: function (url, successCallback, errorCallback) {
        $.ajax({
            type: "GET",
            datatype: "JSON",
            crossDomain: true,
            url: URL + url,
            success: successCallback,
            beforeSend: function () {
                ViewLoading.setBusy("កំពុងតភ្ជាប់", true);
            },
            complete: function () {
                ViewLoading.setBusy(null, false);
            },
            error: errorCallback
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
    onExite: function ()
    {
        if (navigator.app) {
            navigator.app.exitApp();
        } else if (navigator.device) {
            navigator.device.exitApp();
        }
    }
};
App.initialize();

