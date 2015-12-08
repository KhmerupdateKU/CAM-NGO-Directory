if (!window.plugins) {
    window.plugins = {};
}
window.plugins.loadingIndicator = {
    show: function (options, callback) {

        window.PhoneGap.exec(
                callback,
                null,
                'LoadingIndicator',
                'showLoading',
                [options]
                );

    },
    hide: function (callback) {

        window.PhoneGap.exec(
                callback,
                null,
                'LoadingIndicator',
                'hideLoading',
                []
                );

    }
};