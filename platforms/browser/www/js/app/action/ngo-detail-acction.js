$(function () {
    $(document).delegate("#btn-favorite", "click", function () {
        $('#favorite').toggleClass("zmdi-favorite");
        $('#favorite').toggleClass("zmdi-favorite-outline");
        if ($('#favorite').hasClass('zmdi-favorite')) {
            FavoriteController.add(NgoModel.getId(), NgoDetailController.getNgo());
        } else {
            FavoriteController.remove(NgoModel.getId());
        }
    });
    $(document).delegate("#page-ngo-detail", "pagebeforeshow", function () {
        NgoDetailController.start();
        NgoDetailController.get(NgoModel.getId());
    });
});
