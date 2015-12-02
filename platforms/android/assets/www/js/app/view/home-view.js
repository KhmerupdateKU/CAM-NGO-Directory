var HomeView = {
    renderHome: function ($element, categories) {
        AppTemplate.process("home-template.html", {categories: categories}, function (content) {
            $element.html(content);
            $element.trigger('create');
        });
    },
    renderPanel:function ($element) {
        AppTemplate.process("panel-left-template.html", null, function (content) {
            $element.html(content);
            $element.trigger('create');
        });
    }
};