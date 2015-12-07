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
<<<<<<< HEAD
    AppCache.clearAll();   
    CategoryModel.setCategory();
    NgoDetailModel.setNgoDetail();
    NgoModel.setNgosCat();
    NgoModel.setNgo(); 
    
=======
    AppCache.clearAll();           
>>>>>>> NGO-Category
  }
};
App.initialize();