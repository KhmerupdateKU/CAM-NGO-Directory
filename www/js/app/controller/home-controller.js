var HomeController = {
    data: [],
    getHome: function () {
        var $element = $('#page-home');
        AppCache.clearAll();
        ch = true;
        CategoryModel.fetch(function (categories) {
            cats = JSON.parse(categories)
            $.map(cats, function (category) {
                if (ch) {
                    HomeController.data.push(
                            {'cat_id': category.cat_id, 'name_en': category.name_en,
                                'name_hk': category.name_kh, 'logo': category.logo, 'ngo': category.ngo,
                                'block': 'ui-block-a'}
                    );
                    ch = false;
                } else {
                    HomeController.data.push(
                            {'cat_id': category.cat_id, 'name_en': category.name_en,
                                'name_hk': category.name_kh, 'logo': category.logo, 'ngo': category.ngo,
                                'block': 'ui-block-b'}
                    );

                    ch = true;
                }
            });
            HomeView.renderHome($element, HomeController.data);
        }, function (error) {
            console.log('error ; ', error);
        });
    },
    getPanel: function () {
        var $element = $('#panel-left');
        HomeView.renderPanel($element);
    }
};



