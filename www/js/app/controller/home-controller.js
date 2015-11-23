var HomeController = {
    getHome: function () {
        var $element = $('#page-home');
        AppCache.clearAll();
        CategoryModel.fetch(function (categories) {
            HomeView.rederHome($element, JSON.parse(categories));                        
        }, function (error) {
            console.log('error ; ', error);
        });

    }
};



