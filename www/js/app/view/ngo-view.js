var NgoView = {
    renderNgos: function ($element, ngos) {        
        AppTemplate.process("ngo-template.html", {ngos: ngos}, function (content) {
            $element.html(content);
            $element.trigger("create");
        });
    },    
};


