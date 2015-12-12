var NgoDetailController = {
    phones: [],
    emails: [],
    getDetail: function () {
        var ngo_id = NgoModel.getId();
        var $element = $('#page-ngo-detail');
        NgoDetailModel.fetchDetailByngo_id(ngo_id, function (ngodetail) {
            var detailJson = JSON.parse(ngodetail);
            NgoDetailController.sync(ngo_id, detailJson)
        });
        NgoOfflineModel.fetchbyngo_id(ngo_id, function (ngo) {
            NgoDetailOfflineModel.fetchbyngo_id(ngo_id, function (d) {
                var detail = [{
                        logo: ngo.logo(),
                        name_en: ngo.name_en(),
                        name_kh: ngo.name_kh(),
                        name_short: ngo.name_short(),                        
                        phone: d.phone(),
                        email: d.email(),
                        website: d.website(),
                        address: d.address(),
                        map: d.map(),
                        description: d.description()
                    }];
                this.phones = NgoDetailController.splitdata(d.phone(), 'phone', ',');
                this.emails = NgoDetailController.splitdata(d.email(), 'email', ',');
                console.log("detail:", detail);
                var data = {detail: detail, url: URL, phones: this.phones, emails: this.emails};
                NgoDetailView.renderDetail($element, data);
            });
        });
    },
    sync: function (ngo_id, newDetails) {
        $.map(newDetails, function (newDetail) {
            NgoDetailOfflineModel.update(ngo_id, newDetail);
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
    }
}
