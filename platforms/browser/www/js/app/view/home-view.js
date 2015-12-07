var HomeView = {
<<<<<<< HEAD
    rederHome: function ($element, categories) {
        AppTemplate.process("home-template.html", {categories: categories}, function (content) {
=======
    renderHome: function ($element, data) {
        AppTemplate.process("home-template.html", data, function (content) {         
            $element.html(content);
            $element.trigger('create');
        });
    },
    renderPanel:function ($element) {
        AppTemplate.process("panel-left-template.html", null, function (content) {
>>>>>>> NGO-Category
            $element.html(content);
            $element.trigger('create');
        });
    }
};