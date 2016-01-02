var HelpView = {
    renderHelp: function ($element, data) {
        AppTemplate.process("help-template.html", data, function (content) {
            $element.html(content);        
            $element.trigger("create");
        });
    },
};


