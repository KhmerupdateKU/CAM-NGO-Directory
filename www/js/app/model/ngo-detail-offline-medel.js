var NgoDetailOfflineModel = {
    add: function (detail) {
        var detailParam = {
            nd_id: detail.nd_id,
            ngo_id: detail.ngo_id,
            phone: detail.phone,
            email: detail.email,
            website: detail.website,
            address: detail.address,
            map: detail.map,
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
    update: function (ngo_id, newDetail) {

        this.fetchbyngo_id(ngo_id, function (oldDetail) {
            if (oldDetail != null) {                
                oldDetail.nd_id(newDetail.nd_id);
                oldDetail.ngo_id(newDetail.ngo_id);
                oldDetail.phone(newDetail.phone);
                oldDetail.email(newDetail.email);
                oldDetail.website(newDetail.website);
                oldDetail.address(newDetail.address);
                oldDetail.map(newDetail.map);
                oldDetail.description(newDetail.description);
            } else {               
                NgoDetailOfflineModel.add(newDetail);
            }
        });
    }
}
