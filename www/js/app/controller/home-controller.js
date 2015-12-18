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
    prepareOffnline: function (cats, callback) {
        ch = 1;
        var categories = $.map(cats, function (category) {
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
            return{
                cat_id: category.cat_id(),
                name_kh: category.name_kh(),
                name_en: category.name_en(),
                logo: category.logo(),
                ngo: category.ngo(),
                block: category.block
            }
        });
        callback(categories);
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
            HomeController.sync(newCategories);
        });
    },
    getOffline: function () {
        CategoryOfflineModel.fetch(function (categories) {
            HomeController.prepareOffnline(categories, function (cats) {
                HomeController.render(cats);
            });
            console.log("do offline");
        });
    },
    get: function () {
        if (App.isOnline())
            HomeController.getOnline();
    },
    sync: function (newCategories) {
        CategoryOfflineModel.fetch(function (oldCategories) {
            CategoryOfflineModel.update(oldCategories, newCategories);
        });
    }
};