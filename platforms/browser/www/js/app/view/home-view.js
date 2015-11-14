var HomeView = {
    rederHome: function ($element, categories) {
        AppTemplate.process("home-template.html", {categories:categories}, function (content) {
            $element.html(content);
            $element.trigger('create');
        })
    }
};