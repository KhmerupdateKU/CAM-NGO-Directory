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
            success: function (cats) {
                var json = (JSON.parse(cats));
                var ch = 1;
                $.map(json, function (cat) {
                    if (ch === 1) {
                        cat.block = 'ui-block-a';
                        ch += 1;
                    } else if (ch === 2) {
                        cat.block = 'ui-block-b';
                        ch += 1;
                    } else {
                        cat.block = 'ui-block-c';
                        ch = 1;
                    }
                    CategoryModel.categoris.push(cat);
                });
            },
            error: function (e) {
                console.log("error:", e);
            }
        });
    },
    getCategories: function () {
        return CategoryModel.categoris;
    }
};