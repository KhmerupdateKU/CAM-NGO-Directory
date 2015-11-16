$(function () {
    $(document).delegate("#page-ngo-detail", "pagebeforeshow", function () {                
        NgoController.getNgoDetail();
    });
});


