//var URL ="http://localhost:8088/Ad-ngos/";
<<<<<<< HEAD
var URL = "http://www.camngo.website/";
=======
var URL ="http://camngo.website/";
>>>>>>> 3f85f0e39614989070d0eaec91d45df943e1e964
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
