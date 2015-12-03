$(function () {
    $(document).delegate("#page-ngo-detail", "pagebeforeshow", function () {
        NgoDetailController.getDetail();                    
    });
    $(document).delegate("#page-ngo-detail", "pageshow", function () {                    
        getMap("map-block", "11.553926,104.933820");
    });
    $(document).delegate("#btn-map", "click", function () {
        $("#map-address").toggleClass("ui-hidden-accessible");
    });
});