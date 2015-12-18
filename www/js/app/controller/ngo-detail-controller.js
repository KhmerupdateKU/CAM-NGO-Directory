var NgoDetailController = {
    phones: [],
    emails: [],
    __favorite: "zmdi-favorite-outline",
    start: function () {
        var $element = $('#page-ngo-detail');
        var ngo_id = NgoModel.getId();
        var data = {header: NgoModel.getName()};
        NgoDetailView.renderDetail($element, data);
        NgoDetailController.get(ngo_id);
    },
    get: function (ngo_id) {
        if ((App.isOnline())) {
            NgoDetailModel.fetchDetailByngo_id(ngo_id, function (ngodetail) {
                var detailJson = JSON.parse(ngodetail);               
                NgoDetailController.favorite(ngo_id, function () {
                    NgoDetailController.render(detailJson);
                });
            });
        } else {
            NgoDetailOfflineModel.fetchbyngo_id(ngo_id, function (data) {
                NgoDetailController.preparetOfflineData(ngo_id, data, function (detail) {
                    NgoDetailController.render(detail);
                });
            });
        }
    },
    preparetOfflineData: function (ngo_id, data, callback) {
        NgoOfflineModel.fetchbyngo_id(ngo_id, function (ngo) {
            var detail = [{
                    ngo_id: ngo_id,
                    cat_id: ngo.cat_id(),
                    cat_name_kh: ngo.cat_name_kh(),
                    cat_name_en: ngo.cat_name_en(),
                    name_kh: ngo.name_kh(),
                    name_en: ngo.name_en(),
                    name_short: ngo.name_short(),
                    logo: ngo.logo(),
                    phone: data.phone(),
                    email: data.email(),
                    website: data.website(),
                    address: data.address(),
                    map: data.map(),
                    description: data.description()
                }];
            callback(detail);
        });
    },
    render: function (details) {
        var $element = $('#page-ngo-detail');
        NgoDetailController.prepareContact(details);
        var data = {detail: details, header: NgoModel.getName(), url: URL, phones: this.phones, emails: this.emails, favorite: NgoDetailController.__favorite};
        NgoDetailView.renderDetail($element, data);
    },
    prepareContact: function (details) {
        $.map(details, function (detail) {
            NgoDetailController.phones = NgoDetailController.splitdata(detail.phone, 'phone', ',');
            NgoDetailController.emails = NgoDetailController.splitdata(detail.email, 'email', ',');
        });
    },
    sync: function (ngo_id, newDetails) {
        NgoDetailOfflineModel.fetchbyngo_id(ngo_id, function (oldDetail) {
            NgoDetailOfflineModel.update(oldDetail, newDetails);
        });
    },
    splitdata: function (data, fieldname, sep) {
        console.log("data", data);
        var elementname = [];
        var temp = data.split(sep);
        if (fieldname === 'phone')
            $.map(temp, function (sub) {
                elementname.push({'phone': sub});
            });
        if (fieldname === 'email')
            $.map(temp, function (sub) {
                elementname.push({'email': sub});
            });
        return elementname;
    },
    favorite: function (ngo_id, callback) {
        NgoDetailOfflineModel.fetchbyngo_id(ngo_id, function (ngo) {
            if (ngo != null)
                NgoDetailController.__favorite = "zmdi-favorite";
            else
                NgoDetailController.__favorite = "zmdi-favorite-outline";
            callback();
        });
    }
}
