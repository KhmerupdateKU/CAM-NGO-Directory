var NgoOfflineModel = {
    offline: true,
    setOffline: function (type) {
        NgoOfflineModel.offline = type;
    },
    getOffline: function () {
        return NgoOfflineModel.offline;
    },
    add: function (ngo) {
        var ngoParam = {
            ngo_id: ngo.ngo_id,
            cat_id: ngo.cat_id,
            cat_name_kh: ngo.cat_name_kh,
            cat_name_en: ngo.cat_name_en,
            name_kh: ngo.name_kh,
            name_en: ngo.name_en,
            name_short: ngo.name_short,
            logo: ngo.logo
        };
        persistence.add(new Ngos(ngoParam));
        persistence.flush();
    },
    remove: function (ngo_id) {
        NgoOfflineModel.fetchbyngo_id(ngo_id, function (ngo) {
            persistence.remove(ngo);            
            persistence.flush();
        });
    },
    count: function (callback) {
        Ngos.all().count(callback);
    },
    fetch: function (callback) {
        Ngos.all().list(callback);
    },
    fetchbycat_id: function (cat_id, callback) {
        Ngos.all().filter("cat_id", '=', cat_id).list(callback);
    },
    fetchbyngo_id: function (ngo_id, callback) {
        Ngos.all().filter("ngo_id", '=', ngo_id).one(callback);
    },
    update: function (oldNgo, newNgo) {
        if (oldNgo && oldNgo.ngo_id() == newNgo.ngo_id) {
            oldNgo.cat_id(newNgo.cat_id);
            oldNgo.cat_name_en(newNgo.cat_name_en);
            oldNgo.cat_name_kh(newNgo.cat_name_kh);
            oldNgo.name_kh(newNgo.name_kh);
            oldNgo.name_en(newNgo.name_en);
            oldNgo.logo(newNgo.logo);
            return false;
        } else {
            NgoOfflineModel.add(newNgo);
        }
    }
}



