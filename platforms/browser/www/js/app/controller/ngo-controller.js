var NgoController = {
    tmpNgoDetail: [],
    getNgos: function () {
<<<<<<< HEAD
        var $element = $('#page-ngo');
        var ngos = NgoModel.getNgos();
        NgoView.renderNgos($element, ngos);
    },
    getNgoCat: function () {
        var $element = $('#page-ngo');
        var catId = CategoryModel.getCatId();
        var ngoDetails = NgoDetailModel.getNgoDetails();
        if (NgoController.tmpNgoDetail) {
            NgoController.tmpNgoDetail = [];
        }
        $.map(ngoDetails, function (ngoDetail) {
            if (ngoDetail.cat_id === catId) {
                NgoController.tmpNgoDetail.push(
                        {"id": ngoDetail.id,
                            "cat_id": ngoDetail.cat_id,
                            "ngo_id": ngoDetail.ngo_id,
                            "cat_name": ngoDetail.cat_name,
                            "ngo_name": ngoDetail.ngo_name,
                            "description": ngoDetail.description}
                );
            }
            ;
        });
        NgoView.renderNgosCat($element, NgoController.tmpNgoDetail);
    },
    getNgoDetail: function () {
        var $element = $('#page-ngo-detail');
        var ngoId = NgoDetailModel.getNgoId();
        var ngoDetails = NgoDetailModel.getNgoDetails();        
        $.map(ngoDetails, function (ngoDetail) {            
            if (ngoDetail.ngo_id === ngoId) {                
                NgoView.renderNgosDetail($element, ngoDetail);
                return;
            }
            ;
        });

=======
        var $element = $('#page-ngo');       
        $element.html("");
        NgoModel.fetByCat_id(function (ngos) {
            var jsonNgos = JSON.parse(ngos);
            var data = {ngos: jsonNgos, ngo_category: CategoryModel.getName(), url: URL};
            NgoView.renderNgos($element, data);                        
        }, function (error) {
            console.log('error ; ', error);
        });
>>>>>>> NGO-Category
    }
};


