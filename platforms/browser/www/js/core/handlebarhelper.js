Handlebars.registerHelper('ifcontact', function (v1, v2, v3, options) {
    console.log("reach ifparamator helper");
    if (v1 != "" || v1 != null)
        return options.fn(this);
    if (v2 != "" || v2 != null)
        return options.fn(this);
    if (v3 != "" || v3 != null)
        return options.fn(this);
});
