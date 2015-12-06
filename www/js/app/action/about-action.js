$(document).delegate("#page-about", "pagebeforeshow", function () {
    AboutController.getAbout();
});