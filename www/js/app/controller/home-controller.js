var HomeController = {
    getHome: function () {
        var $element = $('#page-home');
        CategoryModel.fetch(function (category) {
            var newCategories = JSON.parse(category);
            HomeController.sync(newCategories);
        }, function (error) {
            console.log('error', error);
        });
        ch = 1;
        CategoryOfflineModel.fetch(function (cats) {
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
            var data = {categories: categories, url: URL};
            HomeView.renderHome($element, data);
        });
    },
    sync: function (newCategories) {
        CategoryOfflineModel.fetch(function (oldCategories) {
            CategoryOfflineModel.update(oldCategories, newCategories);
        });
    },
};



