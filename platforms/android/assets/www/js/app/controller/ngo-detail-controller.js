var NgoDetailController = {
    getDetail: function () {
        var $element = $('#page-ngo-detail');        
        NgoDetailModel.fetchDetail(function (detail) {            
            NgoDetailView.renderDetail($element, JSON.parse(detail));
        }, function (error) {
            console.log('error ; ', error);
        });
    }
}
