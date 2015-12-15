var NgoView = {
    renderNgos: function ($element, data) {
        AppTemplate.process("ngo-template.html", data, function (content) {
            $element.html(content);
            ViewLoading.setBusy(true);
            $element.trigger("create");
        });
    },
};


