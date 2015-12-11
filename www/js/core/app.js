//var URL = "http://localhost:8088/Ad-ngos/";
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
        HomeController.getHome();                
    },
    ajaxSetupDefault: function () {
       // $.ajax({
          
        //});
    }
//    checkConnection: function ()
//    {
//        alert("connection");
//        network = navigator.network.connection.type;
//        alert("fdfd");
//        var states = {};
//        states[Connection.UNKNOWN] = 'Unknown connection';
//        states[Connection.ETHERNET] = 'Ethernet connection';
//        states[Connection.WIFI] = 'WiFi connection';
//        states[Connection.CELL_2G] = 'Cell 2G connection';
//        states[Connection.CELL_3G] = 'Cell 3G connection';
//        states[Connection.CELL_4G] = 'Cell 4G connection';
//        states[Connection.NONE] = 'No network connection';
//        alert('Connection type: ' + states[networkState]);
//    }
};
App.initialize();