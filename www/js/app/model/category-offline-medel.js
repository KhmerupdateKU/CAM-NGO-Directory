var CategoryOfflineModel = {
    add: function (category) {
        catParam = {
            cat_id: category.cat_id,
            name_kh: category.name_kh,
            name_en: category.name_en,
            logo: category.logo,
            ngo: category.ngo
        };
        console.log("catParam", catParam);
        persistence.add(new Category(catParam));
        persistence.flush();
    },
    fetch: function (callback) {
        Category.all().list(callback);
    },
    update: function (oldCategories, newCategories, callback) {
        $.map(newCategories, function (newCategory) {
            var isNew = true;
            $.each(oldCategories, function (tag, oldCategory) {
                if (oldCategory.cat_id() == newCategory.cat_id) {
                    isNew = false;
                    oldCategory.name_kh(newCategory.name_kh);
                    oldCategory.name_en(newCategory.name_en);
                    oldCategory.logo(newCategory.logo);
                    oldCategory.ngo(newCategory.ngo);
                    return false;
                } else {
                    isNew = true;
                }
            });
            if (isNew) {
                CategoryOfflineModel.add(newCategory);
            }
        });
        CategoryOfflineModel.fetch(function (categories) {
            callback(categories);
        });
    }
};