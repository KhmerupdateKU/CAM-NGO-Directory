var NgoDetailOfflineModel = {
    add: function (detail) {
        var detailParam = {           
            ngo_id: detail.ngo_id,
            phone: detail.phone,
            email: detail.email,
            website: detail.website,
            address: detail.address,            
            description: detail.description,
        };
        persistence.add(new Details(detailParam));
        persistence.flush();
    },
    fetchbyngo_id: function (ngo_id, callback) {
        Details.all().filter('ngo_id', '=', ngo_id).one(callback);
    },
    fetch: function (callback) {
        Details.all().list(callback);
    },
    update: function (oldDetail, newDetail) {
        if (oldDetail && oldDetail.ngo_id() == newDetail.ngo_id) {            
            oldDetail.ngo_id(newDetail.ngo_id);
            oldDetail.phone(newDetail.phone);
            oldDetail.email(newDetail.email);
            oldDetail.website(newDetail.website);
            oldDetail.address(newDetail.address);            
            oldDetail.description(newDetail.description);
        } else {
            NgoDetailOfflineModel.add(newDetail);
        }
    }
}
