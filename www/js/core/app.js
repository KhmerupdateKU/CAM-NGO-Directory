//var URL ="http://localhost:8088/Ad-ngos/";
var URL ="http://www.camngo.website/";
var App = {
  initialize: function () {
    this.bindEvents();
  },
  bindEvents: function () {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  onDeviceReady: function () {   
    AppCache.clearAll();
    CategoryModel.fetch();
    NgoModel.fetch();
    NgoDetailModel.fetch();
  }
};
App.initialize();