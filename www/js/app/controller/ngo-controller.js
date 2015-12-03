var NgoController = {
    tmpNgoDetail: [],
    getNgos: function () {
        var $element = $('#page-ngo');
        $element.html("");        
        var jsonNgos = NgoModel.getNgosByCat_id(CategoryModel.getId());
        var data = {ngos: jsonNgos, ngo_category: CategoryModel.getName(), url: URL};
        NgoView.renderNgos($element, data);
    }
};


