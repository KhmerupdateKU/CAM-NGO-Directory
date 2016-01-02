var FavoriteController = {
    start: function () {
        var $element = $('#page-favorite');                
        FavoriteView.renderFavorite($element, null);
        FavoriteController.get();
    },
    get: function () {
        NgoOfflineModel.fetch(function (ngos) {
            FavoriteController.prepareData(ngos, function (final_nog) {
                var $element = $('#page-favorite');
                var data = {ngos: final_nog, url: URL};
                FavoriteView.renderFavorite($element, data);
            });
        });
    },
    prepareData: function (ngos, callback) {
        var temp_ngo = $.map(ngos, function (ngo) {
            return{
                ngo_id: ngo.ngo_id(),
                cat_id: ngo.cat_id(),
                cat_name_kh: ngo.cat_name_kh(),
                cat_name_en: ngo.cat_name_en(),
                name_kh: ngo.name_kh(),
                name_en: ngo.name_en(),
                name_short: ngo.name_short(),
                logo: ngo.logo(),
            }
        });
        callback(temp_ngo);
    },
    add: function (ngo_id,details) {
        $.map(details, function (detail) {
            var ngo = {
                ngo_id: detail.ngo_id,
                cat_id: detail.cat_id,
                cat_name_kh: detail.cat_name_kh,
                cat_name_en: detail.cat_name_en,
                name_en: detail.name_en,
                name_kh: detail.name_kh,
                name_short: detail.name_short,
                logo: detail.logo
            };
            var details = {
                ngo_id: detail.ngo_id,
                phone: detail.phone,
                email: detail.email,
                website: detail.website,
                address: detail.address,
                logo: detail.logo,
                description: detail.description,
                map: detail.map
            };
            FavoriteController.addNgo(ngo_id, ngo);
            FavoriteController.addDetail(ngo_id, details);
        });
    },
    addNgo: function (ngo_id, ngo) {
        NgoController.sync(ngo_id, ngo);
    },
    addDetail: function (ngo_id, detail) {
        NgoDetailController.sync(ngo_id, detail);
    },
    remove: function (ngo_id) {
        NgoOfflineModel.remove(ngo_id);
        NgoDetailOfflineModel.remove(ngo_id);
    }
};


