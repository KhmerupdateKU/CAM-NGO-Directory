$(function () {
    $(document).delegate("#page-ngo", "pagebeforeshow", function () {
        NgoController.getNgos();
    });
    $(document).delegate("#list-ngo-cat li a", "click", function () {
        NgoDetailModel.setNgoId($(this).attr("data-ngo_id"));
    });
    $(document).delegate("#page-ngo", "pageshow", function () {        
        $("#page-ngo-header").html(CategoryModel.getName());
    });
});


