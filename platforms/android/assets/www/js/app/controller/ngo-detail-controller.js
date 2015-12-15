var NgoDetailController = {
    phones: [],
    emails: [],
    start: function () {
        var $element = $('#page-ngo-detail');
        var data = {header: NgoModel.getName()};
        NgoDetailView.renderDetail($element, data);
        NgoDetailController.get();
    },
    get: function () {
        var ngo_id = NgoModel.getId();
        if (App.isOnline()) {
            NgoDetailModel.fetchDetailByngo_id(ngo_id, function (ngodetail) {
                var newdtail = JSON.parse(ngodetail);
                console.log("New detail:,", ngo_id, ngodetail);
                NgoDetailController.prepareOnline(newdtail, function (finaldetail) {
                    console.log("New detail:,", newdtail.phone);
                    NgoDetailController.getDetail(finaldetail);
                });
                NgoDetailController.sync(ngo_id, newdtail);
                console.log("do online");
            });
        } else {
            NgoDetailOfflineModel.fetchbyngo_id(ngo_id, function (details) {
                NgoDetailController.prepareOffline(details, function (finaldetail) {
                    NgoDetailController.getDetail(finaldetail);
                });
                console.log("do offline");
            });
        }
    },
    getDetail: function (details) {
        console.log("Phone:", details.phone);
        var $element = $('#page-ngo-detail');
        NgoDetailController.prepareContact(details);
        var data = {detail: details, header: NgoModel.getName(), url: URL, phones: this.phones, emails: this.emails};
        NgoDetailView.renderDetail($element, data);
        ViewLoading.setBusy(false);
    },
    prepareContact: function (details) {
        $.map(details, function (detail) {
            NgoDetailController.phones = NgoDetailController.splitdata(detail.phone, 'phone', ',');
            NgoDetailController.emails = NgoDetailController.splitdata(detail.email, 'email', ',');
        });
    },
    prepareOnline: function (detail, callback) {
        callback(detail);
    },
    prepareOffline: function (ngo_id, detail, callback) {
        NgoOfflineModel.fetchbyngo_id(ngo_id, function (ngo) {
            var details = [{
                    logo: ngo.logo(),
                    name_en: ngo.name_en(),
                    name_kh: ngo.name_kh(),
                    name_short: ngo.name_short(),
                    phone: detail.phone(),
                    email: detail.email(),
                    website: detail.website(),
                    address: detail.address(),
                    map: detail.map(),
                    description: detail.description()
                }];
            callback(details);
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
    }
}
