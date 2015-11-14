$(function () {
    $(document).delegate("#page-home", "pagebeforeshow", function () {
        HomeController.getHome();
    });
    $(document).delegate("#list-categories li a", "click", function () {
        CategoryModel.setCatId(this.id);        
        CategoryModel.setCatName($(this).attr("data-cat_name"));        
    });
});



