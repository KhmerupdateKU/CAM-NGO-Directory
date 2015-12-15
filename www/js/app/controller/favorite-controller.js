var FavoriteController = {
    start: function () {
        var $element = $('#page-favorite');
        var data = {header: "Your Favorite"};
        FavoriteView.renderFavorite($element, data);
        FavoriteController.get();
    },
    get: function () {
        NgoOfflineModel.fetch(function (ngos) {
            FavoriteController.prepareData(ngos, function (final_nog) {
                var $element = $('#page-favorite');
                var data = {ngos: final_nog, header: "Your Favorite"};
                FavoriteView.renderFavorite($element, data);
                ViewLoading.setBusy(false);
            });
        });
    },
    prepareData: function (ngos, callback) {
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
        callback(temp_ngo);
    },
    add: function (ngo_id, cat_name) {
        NgoDetailModel.fetchDetailByngo_id(ngo_id, function (details) {
            var ngo = [{
                    ngo_id: detail.ngo_id,
                    cat_id: detail.cat_id,
                    cat_name: detail.cat_name,
                    name_en: detail.name_en,
                    name_kh: detail.name_kh,
                    name_short: detail.name_short
                }];
            var detail = [{
                    phone: detail.phone,
                    email: detail.email,
                    website: detail.website,
                    address: detail.address,
                    logo: detail.logo,
                    description: detail.description,
                    map: detail.map
                }];
        });
    },
    addNgo: function (ngo_id, cat_name) {

    },
    addDetail: function (ngo_id) {

    }
};


