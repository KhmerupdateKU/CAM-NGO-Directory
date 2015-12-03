var CategoryModel = {
    id: null,
    name: null,
    categoris: [],
    setId: function (id) {
        CategoryModel.id = id;
    },
    getId: function () {
        return CategoryModel.id;
    },
    setName: function (name) {
        CategoryModel.name = name;
    },
    getName: function () {
        return CategoryModel.name;
    },
    fetch: function () {
        $.ajax({
            type: "POST",
            datatype: "JSON",
            crossDomain: true,
            url: URL + "index.php/category/fetchcategory",
            success: function (categories) {
                var ch = 1;
                var cats = JSON.parse(categories);
                $.map(cats, function (category) {
                    if (ch === 1) {
                        category.block = 'ui-block-a';
                        ch += 1;
                    } else if (ch === 2) {
                        category.block = 'ui-block-b';
                        ch += 1;
                    } else {
                        category.block = 'ui-block-c';
                        ch = 1;
                    }
                    CategoryModel.set(category);
                });
            }, error: function (e) {
                console.log("error:", e);
            }
        });
    },
    set: function (cat) {
        CategoryModel.categoris.push(cat);
    },
    get: function () {
        return CategoryModel.categoris;
    }
};