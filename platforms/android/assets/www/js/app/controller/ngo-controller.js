var NgoController = {
    tmpNgoDetail: [],
    getNgos: function () {
        var $element = $('#page-ngo');
        $element.html("");
        NgoModel.fetByCat_id(function (ngos) {
            var jsonNgos = JSON.parse(ngos);
            var data = {ngos: jsonNgos, ngo_category: CategoryModel.getName(), url: URL};
            NgoView.renderNgos($element, data);
        });
    }
};


