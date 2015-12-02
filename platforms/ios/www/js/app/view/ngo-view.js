var NgoView = {
    renderNgos: function ($element, data) {
        console.log("data : ", data);
        AppTemplate.process("ngo-template.html", data, function (content) {
            $element.html(content);
            console.log( 'content ', content);
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


