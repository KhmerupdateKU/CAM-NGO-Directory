<<<<<<< HEAD
var HomeView = {
    renderHome: function ($element, data) {
        AppTemplate.process("home-template.html", data, function (content) {         
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
=======
var HomeView = {
    renderHome: function ($element, data) {
        AppTemplate.process("home-template.html", data, function (content) {         
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
>>>>>>> 3f85f0e39614989070d0eaec91d45df943e1e964
};