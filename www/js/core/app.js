//var URL ="http://localhost:8088/Ad-ngos/";
var URL = "http://www.camngo.website/";
var App = {
    initialize: function () {
        this.bindEvents();
    },
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function () {
        AppCache.clearAll();
    }
};
function exitApp()
{
    if (navigator.app) {
        navigator.app.exitApp();
    } else if (navigator.device) {
        navigator.device.exitApp();
    }
}
App.initialize();
