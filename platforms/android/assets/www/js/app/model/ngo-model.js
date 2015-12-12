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
    fetchByCat_id: function (successCallback) {        
        $.ajax({
            url: URL + "index.php/ngo/fetchngobycat_id/" + CategoryModel.getId(),            
            success: successCallback            
        });
    },    
    fetch: function (successCallback) {        
        $.ajax({
            url: URL + "index.php/ngo/fetchngo",            
            success: successCallback            
        });
    }
};
