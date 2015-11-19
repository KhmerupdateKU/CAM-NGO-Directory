$(function () {
    $(document).delegate("#page-ngo", "pagebeforeshow", function () {
        $("#page-ngo-header").html(CategoryModel.getCatName());
        NgoController.getNgoCat();
    });    
    $(document).delegate("#list-ngo-cat li a", "click", function () {
        NgoDetailModel.setNgoId($(this).attr("data-ngo_id"));       
   });
});


