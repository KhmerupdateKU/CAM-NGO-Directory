var NgoDetailController = {
    getDetail: function () {
        var $element = $('#page-ngo-detail');        
        $element.html("");
        NgoDetailModel.fetchDetail(function (ngodetail) {                        
            var jsonNgos = JSON.parse(ngodetail);
            var data = {detail: jsonNgos, url: URL};
            console.log("data",data);
            NgoDetailView.renderDetail($element, data);
        }, function (error) {
            console.log('error ; ', error);
        });
    }
}
