var NgoDetailController = {
    $element: $('#page-ngo-detail'),
    phones: [],
    emails: [],
    ngo: [],
    __favorite: "zmdi-favorite",
    setNgo: function (ngo) {
        NgoDetailController.ngo = [];
        NgoDetailController.ngo = ngo;
    },
    getNgo: function () {
        return NgoDetailController.ngo;
    },
    start: function () {
        var data = {header: NgoModel.getName()};
        NgoDetailView.renderDetail(NgoDetailController.$element, data);
        NgoDetailController.get(NgoModel.getId());
    },
    get: function (ngo_id) {
        if (App.isOnline() && !NgoOfflineModel.getOffline()) {
            NgoDetailModel.fetchDetailByngo_id(ngo_id, function (ngodetail) {
                var detailJson = JSON.parse(ngodetail);
                NgoDetailController.setNgo(detailJson);
                NgoDetailController.isfavorite(ngo_id, function () {
                    NgoDetailController.render(detailJson);
                });
            }, function (e) {
                var data = {error: "ការតភ្ជាប់ត្រូវបានកាត់ផ្តាច់"};
                NgoDetailView.renderDetail(NgoDetailController.$element, data);
            });
        } else {
            if (NgoOfflineModel.getOffline()) {
                NgoDetailOfflineModel.fetchbyngo_id(ngo_id, function (data) {
                    NgoDetailController.preparetOfflineData(ngo_id, data, function (detail) {
                        NgoDetailController.render(detail);
                    });
                });
            } else {
                NgoDetailController.getOffline();
            }
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
                    description: data.description()
                }];
            callback(detail);
        });
    },
    render: function (details) {
        NgoDetailController.prepareContact(details);
        var data = {detail: details, header: NgoModel.getName(), url: URL, phones: this.phones, emails: this.emails, favorite: NgoDetailController.__favorite};
        NgoDetailView.renderDetail(NgoDetailController.$element, data);
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
    isfavorite: function (ngo_id, callback) {
        NgoDetailOfflineModel.fetchbyngo_id(ngo_id, function (ngo) {
            if (ngo != null)
                NgoDetailController.__favorite = "zmdi-favorite";
            else
                NgoDetailController.__favorite = "zmdi-favorite-outline";
            callback();
        });
    },
    getOffline: function () {
        var data;
        NgoOfflineModel.count(function (c) {
            if (c > 0) {
                data = {error: "ពុំមានអីនធឺណិតតភ្ជាប់", favorite: true};
            } else {
                data = {error: "ពុំមានអីនធឺណិតតភ្ជាប់"};
            }
            NgoDetailView.renderDetail(NgoDetailController.$element, data);
        });
    }
}
