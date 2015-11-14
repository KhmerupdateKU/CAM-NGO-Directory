var App = {
  initialize: function () {
    this.bindEvents();
  },
  bindEvents: function () {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  onDeviceReady: function () {   
    AppCache.clearAll();   
    CategoryModel.setCategory();
    NgoDetailModel.setNgoDetail();
    NgoModel.setNgosCat();
    NgoModel.setNgo(); 
    
  }
};
App.initialize();