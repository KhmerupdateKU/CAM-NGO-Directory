var HomeController = {
    start: function () {
        var $element = $('#page-home');
        HomeView.renderHome($element, null);
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
        var $element = $('#page-home');
        var data = {categories: cats, url: URL};
        HomeView.renderHome($element, data);
    },
    getOnline: function () {
        CategoryModel.fetch(function (category) {
            var newCategories = JSON.parse(category);
            HomeController.prepareOnline(newCategories, function (cats) {
                HomeController.render(cats);
            });
        });
    },
    getOffline: function () {
        var $element = $('#page-home');
        var data;
        NgoOfflineModel.count(function (c) {
            if (c > 0) {
                data = {noconnection: "ពុំមានអ៊ីនធឺណិតតភ្ជាប់ !", favorite: "លោកអ្នកអាចចូលទៅមើលចំណូលចិត្តរបស់អ្នក", ngo: "មាន " + c + " អង្គការ"};
            } else {
                data = {noconnection: "ពុំមានអ៊ីនធឺណិតតភ្ជាប់ !"};
            }
            HomeView.renderHome($element, data);
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