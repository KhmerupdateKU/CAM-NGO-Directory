$(document).on("mobileinit", function () {
    $.mobile.autoInitializePage = false;
    $.mobile.hashListeningEnabled = false;
});

function mobileInitPage() {
    $.mobile.hashListeningEnabled = true;
    $.mobile.initializePage();
}
;

