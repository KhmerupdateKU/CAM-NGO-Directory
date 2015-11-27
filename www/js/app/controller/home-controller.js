var HomeController = {
    getHome: function () {
        var $element = $('#page-home');
        AppCache.clearAll();
        CategoryModel.fetch(function (categories) {
            HomeView.renderHome($element, JSON.parse(categories));
        }, function (error) {
            console.log('error ; ', error);
        });
    },
    getPanel: function () {
        var $element = $('#panel-left');        
        HomeView.renderPanel($element);
    }
};



