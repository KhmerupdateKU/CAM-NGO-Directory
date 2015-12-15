var FavoriteView = {
    renderFavorite: function ($element, data) {
        AppTemplate.process("favorite-template.html", data, function (content) {
            $element.html(content);
            ViewLoading.setBusy(true);
            $element.trigger("create");
        });
    },
};


