$(function () {
    $(document).delegate("#page-ngo", "pagebeforeshow", function () {
        NgoController.start();
        NgoController.get();
    });
    $(document).delegate("#list-ngo a", "click", function () {
        if (NgoOfflineModel.getOffline()) {
            NgoOfflineModel.setOffline(false);
        }
        NgoModel.setId($(this).attr("data-ngo_id"));
        NgoModel.setName($(this).attr("data-ngo_name"));
    });
    $(document).delegate("#btn-search", "click", function () {
        $(this).toggleClass('ui-hidden-accessible');
        $('#search-block').toggleClass('ui-hidden-accessible');
        $('#filter-ngo').trigger("focus");
    });

    $(document).delegate("#filter-ngo", "blur", function () {
        $('#search-block').toggleClass('ui-hidden-accessible');
        $('#btn-search').toggleClass('ui-hidden-accessible');
    });
});


