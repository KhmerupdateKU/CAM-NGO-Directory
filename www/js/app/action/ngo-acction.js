$(function () {
    $(document).delegate("#page-ngo", "pagebeforeshow", function () {
        NgoController.getNgos();
    });
    $(document).delegate("#list-ngo li a", "click", function () {        
        NgoModel.setId($(this).attr("data-ngo_id"));       
        NgoModel.setName($(this).attr("data-ngo_name"));               
    });
    $(document).delegate("#page-ngo", "pageshow", function () {        
        $("#page-ngo-header").html(CategoryModel.getName());
    });
});


