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
var NdgoDetailAction = {
    getMap: function (taget, latlong) {
        if (latlong == null | latlong == "") {
            document.getElementById(taget).innerHTML = "<div class='card-supporting-text'><div class='card-title'><h4 class='khmer-regular'>ពុំទាន់មាននៅលើបណ្តាញ Google Map ៕</h4></div></div>";
        } else {
            console.log("Let long:", latlong);
            if (App.isOnline()) {
                Map.get(taget, latlong);
            } else {
                document.getElementById(taget).innerHTML = "<div class='card-supporting-text'><div class='card-title'><h4 class='khmer-regular'>ពុំមានបណ្តាញអ៊ីនធើណិតតភ្ជាប់៕</h4></div></div>";
            }
        }
    }
}