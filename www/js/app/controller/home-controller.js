var HomeController = {
    getHome: function () {
        var $element = $('#page-home');
        ViewLoading.setBusy(true);
        CategoryModel.fetch(function (categories) {             
                var ch = 1;
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
                var data = {categories: cats, url: URL};
                HomeView.renderHome($element, data);
            },function(error){
                console.log('error : ', error);
            });
//        var cats = CategoryModel.get();
//        if (cats.length !== 0 || NgoModel.getNgos().length === 0 || NgoDetailModel.getDetail().length === 0) {
//            
//        } else {
//            HomeView.renderHome($element, null);
//            setInterval(function () {
//                if (CategoryModel.get().length === 0)
//                    CategoryModel.fetch();
//                if (NgoModel.getNgos().length === 0)
//                    NgoModel.fetch();
//                if (NgoDetailModel.getDetail().length === 0)
//                    NgoDetailModel.fetch();
//            }, 3000);
//        }
    }
};



