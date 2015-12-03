$(function () {
    $(document).delegate("#page-ngo-detail", "pagebeforeshow", function () {        
        NgoDetailController.getDetail();
        
    });    
    $(document).delegate("#btn-map", "click", function () {
        $('#map').toggleClass('ui-hidden-accessible');
    });
});