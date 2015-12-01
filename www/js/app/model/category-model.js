var CategoryModel = {
    id: null,
    name: null,    
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
    fetch: function (successCallback, errorCallback) {
        $.ajax({
            type: "GET",
            datatype: "JSON",
            crossDomain: true,            
            url: "http://www.camngo.netau.net/index.php/category/fetchcategory",
            success: successCallback,
            error: errorCallback
        });
    }
};