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
            type: "GET",
            datatype: "JSON",
            url: URL + "index.php/category/fetchcategory",
            crossDomain: true,
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

                });
                CategoryModel.categoris = cats;
                HomeController.getHome();
            }, error: function (e) {
                console.log("error:", e);
            }
        });
    },
    get: function () {
        console.log("get")
        return CategoryModel.categoris;
    }
};