function onerr() {
    $('#ngo-logo').attr('src', 'img/app/na.png');
}
;
$(function () {
    $(document).delegate("#page-ngo-detail", "pagebeforeshow", function () {
        NgoDetailController.getDetail();
    });
    $(document).delegate("#page-ngo-detail", "pageshow", function () {
        $('#page-detail-header').html(NgoModel.getName())
    });
    $(document).delegate("#btn-map", "click", function () {
        $('#map').toggleClass('ui-hidden-accessible');
    });
});



