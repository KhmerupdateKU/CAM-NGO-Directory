var HomeController={
  getHome:function (){                    
      var $element = $('#page-home');
      AppCache.clearAll();      
      var categories = CategoryModel.getCategory();
      HomeView.rederHome($element,categories);      
  }  
};



