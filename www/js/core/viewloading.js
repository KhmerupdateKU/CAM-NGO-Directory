var ViewLoading = {
    __busy: false,
    setBusy: function (busy) {        
        ViewLoading.__busy = busy;
        if (ViewLoading.__busy) {
            Spinner.show();
        } else {            
            Spinner.hide();
        }
    }
}
var Spinner = {
    show: function () {
        $.mobile.loading('show', {
            text: 'Complete',
            textVisible: true,
            html: "<center><div class='nd2-card'><span class='ui-bar ui-overlay-c ui-corner-all'><img src='img/app/FlipFlop.gif'/></span><span class='ui-bar ui-overlay-c ui-corner-all'><h4 class='khmer-regular'>Is Fucking</h4></span></div></center>"
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