var NgoDetailView = {
    renderDetail: function ($element, detail) {        
        AppTemplate.process("ngo-detail-template.html", {detail: detail}, function (content) {
            $element.html(content);
            $element.trigger("create");
        });
    },    
};


