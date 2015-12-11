var NgoController = {
    tmpNgoDetail: [],
    getNgos: function () {
        var $element = $('#page-ngo');        
        NgoModel.fetByCat_id(function (ngos) {
            var jsonNgos = JSON.parse(ngos);
            var data = {ngos: jsonNgos, ngo_category: CategoryModel.getName(), url: URL};
            NgoView.renderNgos($element, data);
        });
    }
};


