var HomeController = {
    getHome: function () {
        var online = window.navigator.onLine;
        if (online) {
            var $element = $('#page-home');
            $element.html("");            
            var cats = CategoryModel.getCategories();            
            var data = {categories: cats, url: URL};          
            console.log('data:',data);
            HomeView.renderHome($element, data);
        } else {
            alert('you are offline');
        }
    },
    getPanel: function () {
        var $element = $('#panel-left');
        HomeView.renderPanel($element);
    }
};



