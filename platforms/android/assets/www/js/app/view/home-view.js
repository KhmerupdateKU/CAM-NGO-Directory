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
>>>>>>> 231b9ce2e9f2024e5bb95eea83572d11bcf16ebb
};