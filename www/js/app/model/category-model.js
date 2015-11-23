var CategoryModel = {
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
                {'id': '1', "name": "បច្ចេកវិទ្យា", "image": "img/technology.png"},
                {'id': '2', "name": "ការអប់រំ", "image": "img/educationhome.png"},
                {'id': '3', "name": "នយោបាយ", "image": "img/Political.png"},
                {'id': '4', "name": "ជនពិការ", "image": "img/disable.png"},
                {'id': '5', "name": "ជំងឺអេដស៏", "image": "img/hiv.png"},
                {'id': '6', "name": "កុមារ", "image": "img/children.png"},
                {'id': '7', "name": "ការជួញដូរផ្លូវភេទ", "image": "img/humanabuse.png"},
                {'id': '8', "name": "គ្រឿងញៀនៃ", "image": "img/drugabuse.png"},
                {'id': '9', "name": "សិទ្ធមនុស្ស", "image": "img/humanright.png"},
                {'id': '10', "name": "សុខមាលភាព", "image": "img/health.png"},
                {'id': '11', "name": "ស្ត្រី", "image": "img/women.png"},
                {'id': '12', "name": "ដីធ្លី", "image": "img/land.png"},
                {'id': '13', "name": "សាសនា", "image": "img/butha.jpg"}

        );
    },
    getCategory: function () {
        return CategoryModel.category;
    },    
    fetch: function (successCallback, errorCallback) {
        $.ajax({
            type: "GET",
            dataType: "JSON",
            crossDomain: true,
            url: 'http://localhost:8088/Ad-ngos/index.php/category/fetchcategory',            
            success: successCallback,
            error: errorCallback
        });

    }
};