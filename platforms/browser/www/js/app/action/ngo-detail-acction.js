$(function () {
<<<<<<< HEAD
    $(document).delegate("#page-ngo-detail", "pagebeforeshow", function () {                
        NgoController.getNgoDetail();
    });
});


=======
    $(document).delegate("#page-ngo-detail", "pagebeforeshow", function () {
        NgoDetailController.getDetail();                    
    });
    $(document).delegate("#page-ngo-detail", "pageshow", function () {                    
        
    });    
});
>>>>>>> NGO-Category
