$(function () {
    $(document).delegate("#page-home", "pagebeforeshow", function () {
        HomeController.start();
        HomeController.get();
    });
    $(document).delegate("#card-menu a", "click", function () {
        CategoryModel.setId(this.id);
        CategoryModel.setName($(this).attr("data-cat_name"));
    });

});
function getPopup() {
    console.log("Yew");
    $("#noconnection").trigger("href");
}
;



