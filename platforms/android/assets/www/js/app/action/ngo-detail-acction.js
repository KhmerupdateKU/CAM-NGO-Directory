$(function () {
    $(document).delegate("#page-ngo-detail", "pagebeforeshow", function () {
        NgoDetailController.start();                    
    });
    $(document).delegate("#page-ngo-detail", "pageshow", function () {                    
        
    });    
});