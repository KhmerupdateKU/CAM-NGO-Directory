var NgoModel = {
    id: null,
    name: null,
    getName: function () {
        return NgoModel.name;
    },
    setId: function (id) {
        NgoModel.id = id;
    },
    getId: function () {
        return NgoModel.id;
    },
    setName: function (name) {
        NgoModel.name = name;
    },
    fetByCat_id: function (successCallback) {
        $.ajax({
            url: URL + "index.php/ngo/fetchngobycat_id/" + CategoryModel.getId(),
            success: successCallback            
        });
    },
};
