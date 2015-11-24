$(function () {
    $(document).delegate("#page-home", "pagebeforeshow", function () {
        HomeController.getHome();
    });
    $(document).delegate("#list-categories li a", "click", function () {
        CategoryModel.setId(this.id);        
        CategoryModel.setName($(this).attr("data-cat_name"));        
    });
    $(document).delegate("#header-home", "click", function () {
        alert("s");
    });
});



