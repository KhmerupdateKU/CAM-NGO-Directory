var HomeController = {
    getHome: function () {
        var $element = $('#page-home');
        HomeView.renderHome($element, null);
        console.log("Home is shown");
        ViewLoading.setBusy(true);
        ch = 1;
//        CategoryModel.fetch(function (categories) {
//            var cats = JSON.parse(categories);
//            $.map(cats, function (category) {
//                if (ch === 1) {
//                    category.block = 'ui-block-a';
//                    ch += 1;
//                } else if (ch === 2) {
//                    category.block = 'ui-block-b';
//                    ch += 1;
//                } else {
//                    category.block = 'ui-block-c';
//                    ch = 1;
//                }
//            });
//            var data = {categories: cats, url: URL};
//            HomeView.renderHome($element, data);
//        });
    },
};



