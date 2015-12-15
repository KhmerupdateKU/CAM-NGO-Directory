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
        if (!(App.isOnline())) {
            NgoDetailModel.fetchDetailByngo_id(ngo_id, function (ngodetail) {
                var newdtail = JSON.parse(ngodetail);
                NgoDetailController.prepareDataOnline(newdtail, function (finaldetail) {
                    NgoDetailController.render(finaldetail);
                });
                NgoDetailController.sync(ngo_id, newdtail);
                console.log("do online");
            });
        } else {
            console.log("do offline");
            NgoDetailOfflineModel.fetchbyngo_id(ngo_id, function (details) {
                NgoDetailController.prepareDataOffline(ngo_id, details, function (finaldetail) {
                    NgoDetailController.render(finaldetail);
                });
            });
        }
    },
    render: function (details) {
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
    prepareDataOnline: function (detail, callback) {
        callback(detail);
    },
    prepareDataOffline: function (ngo_id, detail, callback) {
        NgoOfflineModel.fetchbyngo_id(ngo_id, function (ngo) {
            console.log("NGOS", detail);
            NgoDetailController.details = [{
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
    },   
}
