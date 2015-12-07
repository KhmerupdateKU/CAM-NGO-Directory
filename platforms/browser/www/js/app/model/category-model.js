var CategoryModel = {
<<<<<<< HEAD
    category: [],
    catId: null,
    catName: null,
    setCatId: function (id) {
        CategoryModel.catId = id;
    },
    getCatId: function () {
        return CategoryModel.catId;
    },
    setCatName: function (name) {
        CategoryModel.catName = name;
    },
    getCatName: function () {
        return CategoryModel.catName;
    },
    setCategory: function () {
        CategoryModel.category.push(
                {'id': '1', "name": "Technology", "image":"img/technology.png"},
                {'id': '2', "name": "Education" , "image":"img/educationhome.png"},
                {'id': '3', "name": "Politic", "image":"img/Political.png"},
                {'id': '4', "name": "Disable Persion", "image":"img/disable.png"} ,
                {'id': '5', "name": "TRADITIONAL", "image":"img/traditional.png"},
                {'id': '6', "name": "Children", "image":"img/children.png"},
                {'id': '7', "name": "Sex traffic Abuse", "image":"img/humanabuse.png"},
                {'id': '8', "name": "Drug Abuse", "image":"img/drugabuse.png"},
                {'id': '9', "name": "Human Right", "image":"img/humanright.png"},
                {'id': '10', "name": "Health", "image":"img/health.png"}
        );
    },
    getCategory: function () {
        return CategoryModel.category;
=======
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
            type: "POST",
            datatype: "JSON",
            crossDomain: true,            
            url: URL + "index.php/category/fetchcategory",
            success: successCallback,
            error: errorCallback
        });
>>>>>>> NGO-Category
    }
};