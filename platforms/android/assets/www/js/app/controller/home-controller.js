var HomeController = {
    getHome: function () {
        var $element = $('#page-home');
        ch = 1;
        CategoryModel.fetch(function (categories) {
            var cats = JSON.parse(categories);          
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
            HomeView.renderHome($element, cats);
        }, function (error) {
            console.log('error ; ', error);
        });
    },
    getPanel: function () {
        var $element = $('#panel-left');
        HomeView.renderPanel($element);
    }
};



