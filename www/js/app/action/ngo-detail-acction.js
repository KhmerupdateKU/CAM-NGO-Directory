$(function () {
    $(document).delegate("#page-ngo-detail", "pagebeforeshow", function () {                       
        NgoDetailController.getDetail();
    });
    $(document).delegate("#page-ngo-detail", "pageshow", function () {                       
        $('#page-detail-header').html(NgoModel.getName())
    });
});


