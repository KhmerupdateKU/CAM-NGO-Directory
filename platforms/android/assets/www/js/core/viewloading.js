var ViewLoading = {
    __busy : false,
    setBusy: function(busy){
        ViewLoading.__busy = busy;
        if(ViewLoading.__busy){
            Spinner.show();
        }else{
            Spinner.hide();
        }
    }
}

var Spinner = {
    show: function(){
//        console.log("mobile activepage : ", $.mobile.activePage)
//        $.mobile.activePage.addClass("ui-disabled");
        $.mobile.loading( 'show', {
                text: 'foo',
                textVisible: true,
                theme: 'z',
                html: ""
        });
    },
    hide: function(){
//        $.mobile.activePage.removeClass("ui-disabled");
        $.mobile.loading('hide', {
            text: 'foo',
            textVisible: true,
            theme: 'z',
                html: ""
        });
    }
}