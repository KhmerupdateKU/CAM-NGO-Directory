var NgoController = {
    tmpNgoDetail: [],
    getNgos: function () {
        var $element = $('#page-ngo');
        NgoModel.fetchByCat_id(function (ngos) {
            var jsonNgos = JSON.parse(ngos);
            NgoController.sync(jsonNgos);
        });
        NgoOfflineModel.fetchby_cat_id(function (ngos) {
            var temp_ngo = $.map(ngos, function (ngo) {
                return{
                    ngo_id: ngo.ngo_id(),
                    cat_id: ngo.cat_id(),
                    name_kh: ngo.name_kh(),
                    name_en: ngo.name_en(),
                    name_short: ngo.name_short(),
                    logo: ngo.logo()
                }
            });
            var data = {ngos: temp_ngo, ngo_category: CategoryModel.getName(), url: URL};
            NgoView.renderNgos($element, data);
        });

    },
    sync: function (newNgos) {
        NgoOfflineModel.fetch(function (oldNgos) {
            NgoOfflineModel.update(oldNgos, newNgos);
        });
    },
};


