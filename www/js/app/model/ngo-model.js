var NgoModel = {
    id: null,
    name: null,
    getName: function () {
        return this.name;
    },
    setId: function (id) {
        this.id = id;
    },
    getId: function () {
        return this.id;
    },
    setName: function (name) {
        this.name = name;
    },
    fetchByCat_id: function (cat_id, successCallback) {
        App.ajaxRequest("index.php/ngo/fetchngobycat_id/" + cat_id,successCallback);        
    }    
};
