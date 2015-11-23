$(function () {
    $(document).delegate("#page-ngo-detail", "pagebeforeshow", function () {                
        NgoDetailController.getDetail();
    });
});


