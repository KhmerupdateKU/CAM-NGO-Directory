var NgoModel = {
<<<<<<< HEAD
    ngo: [],
    ngoCat:[],
    setNgo: function () {
        NgoModel.ngo.push(
                {"id": "1", "name": "InSTEDD"},
                {"id": "2", "name": "HRD Center"},
                {"id": "3", "name": "UNESCO"},
                {"id": "4", "name": "Human Right of Commity"}
        );
    },
    getNgos: function () {
        return NgoModel.ngo;
    },
    setNgosCat:function (){
        NgoModel.ngoCat.push(
                {"id": "1","cat-id":"4","ngo-id":"1", "name": "InSTEDD"},
                {"id": "2","cat-id":"2","ngo-id":"2", "name": "HRD Center"},
                {"id": "3","cat-id":"2","ngo-id":"3",  "name": "UNESCO"},
                {"id": "4","cat-id":"3","ngo-id":"4",  "name": "Human Right of Commity"}
        );
    },
    getNgosCat:function (){
        return NgoModel.ngoCat;
    }
=======
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
    fetByCat_id: function (successCallback, errorCallback) {
        $.ajax({
            type: "POST",
            datatype: "JSON",
            crossDomain: true,
            url: URL + "index.php/ngo/fetchngobycat_id/" + CategoryModel.getId(),
            success: successCallback,
            error: errorCallback
        });
    },
>>>>>>> NGO-Category
};
