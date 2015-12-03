var connectionStatus = false;
$(function () {
    $(document).on('pagebeforeshow', '#page-home', function () {
        setInterval(function () {
            connectionStatus = navigator.onLine ? 'online' : 'offline';
        }, 100);
        $(document).on('click', '#check-connection', function () {
            alert(connectionStatus);
        });
    });
    $(document).delegate("#page-home", "pagebeforeshow", function () {
        HomeController.getHome();
    });
    $(document).delegate("#home-footer", "click", function () {
        $('#home-bottom').toggleClass('ui-hidden-accessible');
    });
    $(document).delegate("#card-menu a", "click", function () {
        CategoryModel.setId(this.id);
        CategoryModel.setName($(this).attr("data-cat_name"));
    });

});



