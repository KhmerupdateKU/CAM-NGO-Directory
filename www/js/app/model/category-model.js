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
    fetch: function (successCallback) {        
        $.ajax({
            type: "GET",
            datatype: "JSON",
            crossDomain: true,
            url: URL + "index.php/category/fetchcategory",
            success: successCallback,
            error: function () {
                ViewLoading.setBusy(true);
            },
            beforeSend: function () {
                //ViewLoading.setBusy(true);
            },
            afterSend: function (){
                ViewLoading.setBusy(true);
            },
            complete: function () {
                //ViewLoading.setBusy(true);
            },
        });
    }
};