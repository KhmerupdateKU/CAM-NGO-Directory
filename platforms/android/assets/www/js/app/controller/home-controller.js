var HomeController = {
    getHome: function () {
        var $element = $('#page-home');
        AppCache.clearAll();
        CategoryModel.fetch(function (categories) {
            HomeView.rederHome($element, categories);
            console.log(categories);
        }, function (error) {
            console.log('error ; ', error);
        });                
    }
};



