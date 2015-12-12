var NgoDetailController = {
    phones: [],
    emails: [],
    getDetail: function () {
        var $element = $('#page-ngo-detail');        
        NgoDetailModel.fetchDetail(function (ngodetail) {
            var temps = JSON.parse(ngodetail);
            $.map(temps, function (jsonNgo) {
                NgoDetailController.emails = [];
                NgoDetailController.phones = [];
                var ps = jsonNgo.phone;
                var es = jsonNgo.email;
                var phs = ps.split(",");
                $.map(phs, function (p) {
                    NgoDetailController.phones.push({'phone': p});
                });
                var ems = es.split(",");
                $.map(ems, function (e) {
                    NgoDetailController.emails.push({'email': e});
                });
            });
            var data = {detail: temps, url: URL, phones: NgoDetailController.phones, emails: NgoDetailController.emails};
            NgoDetailView.renderDetail($element, data);
        });
    }
}
