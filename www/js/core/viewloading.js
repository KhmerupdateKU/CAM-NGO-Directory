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
//        console.log("mobile activepage : ", $.mobile.activePage)
//        $.mobile.activePage.addClass("ui-disabled");
        $.mobile.loading('show', {
            text: 'Loading',
            textVisible: true,            
        });
    },
    hide: function () {
//        $.mobile.activePage.removeClass("ui-disabled");
        $.mobile.loading('hide', {
            text: 'Complete',
            textVisible: true,            
        });
    }
}