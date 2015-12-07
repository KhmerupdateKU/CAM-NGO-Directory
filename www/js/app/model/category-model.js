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
    fetch: function (success, error) {        
        $.ajax({
            type: "GET",
            url: URL + "index.php/category/fetchcategory",
            success: success,
            error:error
        });
    },
    get: function () {        
        return CategoryModel.categoris;
    }
};