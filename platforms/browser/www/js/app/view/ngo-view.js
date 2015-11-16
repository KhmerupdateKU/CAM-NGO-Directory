var NgoView = {
    renderNgos: function ($element, ngos) {
        AppTemplate.process("ngo-template.html", {ngos: ngos}, function (content) {
            $element.html(content);
            $element.trigger("create");
        });
    },
    renderNgosCat: function ($element, ngos) {
        AppTemplate.process("ngo-template.html", {ngos: ngos}, function (content) {
            $element.html(content);
            $element.trigger("create");
        });
    },
    renderNgosDetail: function ($element, ngo) {
        AppTemplate.process("ngo-detail-template.html", ngo, function (content) {
            $element.html(content);
            $element.trigger("create");
        });
    }
};


