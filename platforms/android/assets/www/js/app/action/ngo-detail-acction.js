$(function () {
    $(document).delegate("#btn-favorite", "click", function () {
        $('#favorite').toggleClass("zmdi-favorite");
        $('#favorite').toggleClass("zmdi-favorite-outline");
        if ($('#favorite').hasClass('zmdi-favorite')) {
            FavoriteController.add(NgoModel.getId());
        } else {
            FavoriteController.remove(NgoModel.getId());
        }
    });
    $(document).delegate("#page-ngo-detail", "pagebeforeshow", function () {
        NgoDetailController.start();
    });
});
var NdgoDetailAction = {
    getMap: function (taget, latlong) {
        if (latlong == null | latlong == "") {
            document.getElementById(taget).innerHTML = "<div class='card-supporting-text'><h4 class='khmer-regular'>ពុំទាន់មានទីតាំងអង្គការនេះនៅលើបណ្តាញ Google Map !</h4></div>";
        } else {
            console.log("Let long:", latlong);
            Map.get(taget, latlong);
        }
    }
}