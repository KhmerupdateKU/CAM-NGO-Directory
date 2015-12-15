var ViewLoading = {
    __busy: false,
    setBusy: function (busy) {
        console.log( 'busy : ', busy);
        ViewLoading.__busy = busy;
        if (ViewLoading.__busy) {
            Spinner.show();
        } else {
            console.log('hide loading');
            Spinner.hide();
        }
    }
}
var Spinner = {
    show: function () {
        $.mobile.loading('show', {
            text: 'Complete',
            textVisible: true,
            html: "<center><div class='nd2-card'><span class='ui-bar ui-overlay-c ui-corner-all'><img src='img/app/FlipFlop.gif'/></span><span class='ui-bar ui-overlay-c ui-corner-all'><h4 class='khmer-regular'>សូមមេត្តារងចាំ</h4></span></div></center>"
        });
        //$.mobile.activePage.addClass("ui-disabled");
    },
    hide: function () {        
        $.mobile.loading('hide', {
            text: 'Complete',
            textVisible: true,
        });
        //$.mobile.activePage.removeClass("ui-disabled");
    }
}