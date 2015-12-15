$(function () {
    $(document).delegate("#btn-favorite", "click", function () {
        $('#favorite').toggleClass("zmdi-favorite");
        $('#favorite').toggleClass("zmdi-favorite-outline");
        if ($('#favorite').hasClass('zmdi-favorite')) {
            alert("zmdi-favorite");
        } else {
            alert("zmdi-favorite-outline");
        }
    });
    $(document).delegate("#page-ngo-detail", "pagebeforeshow", function () {
        NgoDetailController.start();
    });
    $(document).delegate("#btn-favorite", "click", function () {
        FavoriteController.add(CategoryModel.getName(), NgoModel.getId());
    });
});