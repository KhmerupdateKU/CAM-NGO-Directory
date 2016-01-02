$(function () {
    $(document).delegate("#page-help", "pagebeforeshow", function () {       
        HelpController.start();
    });       
});


