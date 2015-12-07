var Indicator = {
    show: function (options, callback) {
        window.Cordova.exec(
                callback,
                null,
                'LoadingIndicator',
                'showLoading',
                [options]
                );
    },
    hide: function (callback) {

        window.Cordova.exec(
                callback,
                null,
                'LoadingIndicator',
                'hideLoading',
                []
                );
    }
};


