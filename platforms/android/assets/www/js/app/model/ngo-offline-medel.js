var NgoOfflineModel = {
    add: function (ngo) {
        var ngoParam = {
            ngo_id: ngo.ngo_id,
            cat_id: ngo.cat_id,
            name_kh: ngo.name_kh,
            name_en: ngo.name_en,
            name_short: ngo.name_short,
            logo: ngo.logo,
        };
        persistence.add(new Ngos(ngoParam));
        persistence.flush();
    },
    fetch: function (callback) {
        Ngos.all().list(callback);
    },
    fetchby_cat_id: function (callback) {
        Ngos.all().filter("cat_id", '=', CategoryModel.getId()).list(callback);
    },
    update: function (oldNgos, newNgos) {
        $.map(newNgos, function (newNgo) {
            var isNew = true;
            $.each(oldNgos, function (oldNgo) {
                if (oldNgo.ngo_id() === newNgo.ngo_id) {
                    isNew = false;
                    oldNgo.cat_id(newNgo.cat_id);
                    oldNgo.name_kh(newNgo.name_kh);
                    oldNgo.name_en(newNgo.name_en);
                    oldNgo.logo(newNgo.logo);
                    return false;
                } else {
                    isNew = true;
                }
            });
            if (isNew) {
                NgoOfflineModel.add(newNgo);
            }
        });
    }
}



