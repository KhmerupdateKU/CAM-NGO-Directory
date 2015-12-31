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
                ViewLoading.setBusy("កំពុងតភ្ជាប់", true);
            },
            complete: function () {
                ViewLoading.setBusy(null, false);
            },
            error: function (e) {
                alert("អ៊ីនធឺណិតត្រូវបានកាត់ផ្តាច់");
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
    onExite: function ()
    {
        if (navigator.app) {
            navigator.app.exitApp();
        } else if (navigator.device) {
            navigator.device.exitApp();
        }
    }
    ,
};
App.initialize();

new $.nd2Search({
    placeholder: "Input Placeholder", // Placeholder in the search field
    defaultIcon: "globe-alt", // optional: icon | null
    source: [{label: 'Displayed Value', value: 'real-value', icon: 'custom-icon'}], // autocomplete : option-source
    fn: function (result) { // this function will be executed when a valid result item is selected
        console.log('--- Your custom handling ---');
        console.log('you picked: ');
        console.log(result);
    }
});