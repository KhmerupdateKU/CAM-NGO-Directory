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
                var newNgos = JSON.parse(ngos);
                NgoController.prepareOnline(newNgos, function (finalngos) {
                    NgoController.getNgos(finalngos);
                });
                NgoController.sync(cat_id, newNgos);
            });
        } 
    },
    prepareOnline: function (ngos, callback) {
        callback(ngos);
    },    
    getNgos: function (ngos) {
        var $element = $('#page-ngo');
        var data = {ngos: ngos, header: CategoryModel.getName(), url: URL};
        NgoView.renderNgos($element, data);
        ViewLoading.setBusy(false);
    },
    sync: function (cat_id, newNgos) {
        NgoOfflineModel.fetchbycat_id(cat_id, function (oldNgos) {
            NgoOfflineModel.update(oldNgos, newNgos);
        });
    },
};


