var HomeController = {
    getHome: function () {                
        var $element = $('#page-home'); 
        $element.html("");
        var cats = CategoryModel.get();
        var data = {categories: cats, url: URL};        
        HomeView.renderHome($element, data);        
    }
};



