$(function () {
    $(document).delegate("#page-favorite", "pagebeforeshow", function () {
        FavoriteController.start();
    });    
    $(document).delegate("#list-ngo-offline a", "click", function () {
        NgoModel.setId($(this).attr("data-offline-ngo_id"));
        NgoModel.setName($(this).attr("data-offline-ngo_name"));
    });
    $(document).delegate("#list-ngo-offline a", "longclick", function () {
        alert("Long");
    });
    $(document).delegate("#btn-search-offline", "click", function () {
        $(this).toggleClass('ui-hidden-accessible');
        $('#search-block-offline').toggleClass('ui-hidden-accessible');
        $('#filter-ngo-offline').trigger("focus");
    });

    $(document).delegate("#filter-ngo-offline", "blur", function () {
        $('#search-block-offline').toggleClass('ui-hidden-accessible');
        $('#btn-search-offline').toggleClass('ui-hidden-accessible');
    });
});


