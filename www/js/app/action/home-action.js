$(function () {
//    $(document).delegate("#page-home", "pagebeforeshow", function () {
//        HomeController.update();
//    });
    $(document).delegate("#card-menu a", "click", function () {
        CategoryModel.setId(this.id);
        CategoryModel.setName($(this).attr("data-cat_name"));
    });
});
