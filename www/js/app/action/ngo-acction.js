$(function () {
    $(document).delegate("#page-ngo", "pagebeforeshow", function () {
        NgoController.start();        
    });
    $(document).delegate("#list-ngo a", "click", function () {
        if (NgoOfflineModel.getOffline()) {
            NgoOfflineModel.setOffline(false);
        }
        NgoModel.setId($(this).attr("data-ngo_id"));
        NgoModel.setName($(this).attr("data-ngo_name"));
    });
    $(document).delegate("#btn-search-ngo", "click", function () {        
        $(this).toggleClass('ui-hidden-accessible');
        $('#ngo-header').toggleClass('ui-hidden-accessible');
        $('#btn-back-search-ngo').toggleClass('ui-hidden-accessible');
        $('#btn-back-ngo').toggleClass('ui-hidden-accessible');
        $('#search-block-ngo').toggleClass('ui-hidden-accessible');
        $('#filter-ngo').trigger("focus");
    });

    $(document).delegate("#btn-back-search-ngo", "click", function () {
        $(this).toggleClass('ui-hidden-accessible');
        $('#btn-back-ngo').toggleClass('ui-hidden-accessible');
        $('#ngo-header').toggleClass('ui-hidden-accessible');
        $('#search-block-ngo').toggleClass('ui-hidden-accessible');
        $('#btn-search-ngo').toggleClass('ui-hidden-accessible');
        $('#filter-ngo').val("");
    });
});

