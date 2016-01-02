var NgoDetailView = {
    renderDetail: function ($element, data) {
        AppTemplate.process("ngo-detail-template.html", data, function (content) {
            $element.html(content);            
            $element.trigger("create");
        });
    }
};


