var AboutView = {
    renderAbout: function ($element) {
        AppTemplate.process("about-template.html", null, function (content) {            
            $element.html(content);
            $element.trigger('create');
        });
    },
};


