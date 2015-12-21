var NgoController = {
    start: function () {
        var $element = $('#page-ngo');
        var data = {header: CategoryModel.getName()};
        NgoView.renderNgos($element, data);
        NgoController.get();
    },
    get: function () {
        var cat_id = CategoryModel.getId();
        if (App.isOnline()) {
            NgoModel.fetchByCat_id(cat_id, function (ngos) {
                var ngosJson = JSON.parse(ngos);
                NgoController.render(ngosJson);
            });
        }
    },
    render: function (ngos) {
        var $element = $('#page-ngo');
        var data = {ngos: ngos, header: CategoryModel.getName(), url: URL};
        NgoView.renderNgos($element, data);
    },
    sync: function (ngo_id, newNgo) {
        console.log("fuckin old new:", newNgo);
        NgoOfflineModel.fetchbyngo_id(ngo_id, function (oldNgo) {
            console.log("fuckin old ngo:", oldNgo);
            NgoOfflineModel.update(oldNgo, newNgo);
        });
    },
    remove: function (ngo_id) {
        NgoOfflineModel.remove(ngo_id);
    },
};


