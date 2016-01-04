var NgoController = {
    $element: $('#page-ngo'),
    start: function () {
        NgoController.get();
        var data = {header: CategoryModel.getName()};        
        NgoView.renderNgos(NgoController.$element, data);
    },
    get: function () {
        var cat_id = CategoryModel.getId();
        if (App.isOnline()) {
            NgoModel.fetchByCat_id(cat_id, function (ngos) {
                var ngosJson = JSON.parse(ngos);
                NgoController.render(ngosJson);
            }, function (e) {
                var data = {error: "ការតភ្ជាប់ត្រូវបានកាត់ផ្តាច់"};
                NgoView.renderNgos(NgoController.$element, data);
            });
        } else {
            NgoController.getOffline();
        }
    },
    render: function (ngos) {
        var data = {ngos: ngos, header: CategoryModel.getName(), url: URL};
        NgoView.renderNgos(NgoController.$element, data);
    },
    sync: function (ngo_id, newNgo) {
        NgoOfflineModel.fetchbyngo_id(ngo_id, function (oldNgo) {
            NgoOfflineModel.update(oldNgo, newNgo);
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
            NgoView.renderNgos(NgoController.$element, data);
        });
    }
};


