var ViewLoading = {
    __busy: false,
    setBusy: function (message, busy) {
        if (!message) {
            message = "កំពុងប្រតិបត្តការ....";
        }
        ViewLoading.__busy = busy;
        if (ViewLoading.__busy) {
            Spinner.show(message);
        } else {
            Spinner.hide();
        }
    }
}
var Spinner = {
    show: function (message) {
        $.mobile.loading('show', {
            text: 'Complete',
            textVisible: true,
            html: "<center><div class='nd2-card'><span class='ui-bar ui-overlay-c ui-corner-all'><img style='width: 25%' src='img/app/FlipFlop.gif'/></span><span class='ui-bar ui-overlay-c ui-corner-all'><h4 class='khmer-regular'>" + message + "</h4></span></div></center>"
//           html: "<center><div class='nd2-card'><span class='ui-bar ui-overlay-c ui-corner-all'><h4 class='khmer-regular'>" + message + "</h4></span></div></center>"
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