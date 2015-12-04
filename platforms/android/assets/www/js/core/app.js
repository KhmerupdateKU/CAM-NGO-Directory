//var URL = "http://localhost:8088/Ad-ngos/";
var URL ="http://www.camngo.website/";
//var URL ="http://www.camngo.netau.net/";

var App = {
    initialize: function () {
        this.bindEvents();
    },
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function () {                        
        NgoModel.fetch();
        NgoDetailModel.fetch();
        CategoryModel.fetch();        
        AppCache.clearAll();
    }
};
App.initialize();