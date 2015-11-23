var NgoDetailController = {
    getDetail: function () {
        var $element = $('#page-ngo-detail');
        AppCache.clearAll();
        NgoDetailModel.fetchDetail(function (detail) {            
            NgoDetailView.renderDetail($element, JSON.parse(detail));
        }, function (error) {
            console.log('error ; ', error);
        });
    }
}
