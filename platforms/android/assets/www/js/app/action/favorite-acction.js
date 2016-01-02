$(function () {
    $(document).delegate("#page-favorite", "pagebeforeshow", function () {
        FavoriteController.start();
    });    
    $(document).delegate("#list-ngo-offline a", "click", function () {
        if(!NgoOfflineModel.getOffline()){
            NgoOfflineModel.setOffline(true);
        }
        NgoModel.setId($(this).attr("data-offline-ngo_id"));
        NgoModel.setName($(this).attr("data-offline-ngo_name"));
    });
    $(document).delegate("#list-ngo-offline a", "longclick", function () {
        alert("Long");
    });
    $(document).delegate("#btn-search-offline", "click", function () {       
        $(this).toggleClass('ui-hidden-accessible');
        $('#favorite-header').toggleClass('ui-hidden-accessible');
        $('#btn-back-favorite').toggleClass('ui-hidden-accessible');
        $('#btn-back-search-favorite').toggleClass('ui-hidden-accessible');
        $('#search-block-offline').toggleClass('ui-hidden-accessible');
        $('#filter-ngo-offline').trigger("focus");
    });

    $(document).delegate("#btn-back-search-favorite", "click", function () {
        $(this).toggleClass('ui-hidden-accessible');
        $("#btn-back-favorite").toggleClass('ui-hidden-accessible');
        $('#favorite-header').toggleClass('ui-hidden-accessible');
        $('#search-block-offline').toggleClass('ui-hidden-accessible');
        $('#btn-search-offline').toggleClass('ui-hidden-accessible');
        $('#filter-ngo-offline').val("")
    });
});


