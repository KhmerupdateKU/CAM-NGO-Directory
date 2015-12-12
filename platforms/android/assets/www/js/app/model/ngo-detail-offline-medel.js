var NgoDetailOfflineModel = {
    add: function (detail) {
        var detailParam = new tblDetail({
            nd_id: detail.nd_id,
            ngo_id: detail.ngo_id
        });
        persistence.add(catParam);
        persistence.flush();
    }
}
