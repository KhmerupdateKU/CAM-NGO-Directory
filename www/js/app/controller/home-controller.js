var HomeController = {
    $element: $('#page-home'),
    start: function () {
        HomeView.renderHome(HomeController.$element, null);
        HomeController.get();
    },
    prepareOnline: function (cats, callback) {
        ch = 1;
        $.map(cats, function (category) {
            if (ch === 1) {
                category.block = 'ui-block-a';
                ch += 1;
            } else if (ch === 2) {
                category.block = 'ui-block-b';
                ch += 1;
            } else {
                category.block = 'ui-block-c';
                ch = 1;
            }
        });
        callback(cats);
    },
    render: function (cats) {
        var data = {categories: cats, url: URL};
        HomeView.renderHome(HomeController.$element, data);
    },
    getOnline: function () {
        CategoryModel.fetch(function (category) {
            var newCategories = JSON.parse(category);
            HomeController.prepareOnline(newCategories, function (cats) {
                HomeController.render(cats);
            });
        }, function (e) {
            var data = {error: "ការតភ្ជាប់ត្រូវបានកាត់ផ្តាច់"};
            HomeView.renderHome(HomeController.$element, data);            
        });
    },
    getOffline: function () {
        var data;
        NgoOfflineModel.count(function (c) {
            if (c > 0) {
                data = {error: "ពុំមានអីនធឺណិតតភ្ជាប់", favorite: true, ngo: "មាន " + c + " អង្គការ"};
            } else {
                data = {error: "ពុំមានអីនធឺណិតតភ្ជាប់"};
            }
            console.log('data : ', data);
            HomeView.renderHome(HomeController.$element, data);
        });
    },
    get: function () {
        if (App.isOnline())
            HomeController.getOnline();
        else {
            HomeController.getOffline();
        }
    },
};