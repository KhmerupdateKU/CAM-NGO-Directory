var HomeController = {
    getHome: function () {    
        var $element = $('#page-home');
        var cats = CategoryModel.get();
        if (cats.length !== 0) {
            var data = {categories: cats, url: URL, class: "ui-hidden-accessible"};
            HomeView.renderHome($element, data);
        } else {
            HomeView.renderHome($element, null);
            setInterval(function () {
                if (CategoryModel.get().length === 0)
                    CategoryModel.fetch();
                if (NgoModel.getNgos().length === 0)
                    NgoModel.fetch();
                if (NgoDetailModel.getDetail().length === 0)
                    NgoDetailModel.fetch();
            }, 3000);
        }
    }
};



