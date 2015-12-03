var NgoModel = {
    id: null,
    name: null,
    ngos: [],
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
    fetch: function (successCallback, errorCallback) {
        $.ajax({
            type: "POST",
            datatype: "JSON",
            crossDomain: true,
            url: URL + "index.php/ngo/fetchngo",
            success: function (ngos) {
                var json = (JSON.parse(ngos));
                $.map(json, function (ngo) {
                    NgoModel.ngos.push(ngo);
                });
            },
            error: function (e) {
                console.log("error:", e);
            }
        });
    },
    getNgos: function () {
        return NgoModel.ngos;
    },
    getNgosByCat_id: function (cat_id) {
        var temp = [];
        $.map(NgoModel.getNgos(),function (ngos){
          if(ngos.cat_id===cat_id){
              temp.push(ngos);
          }  
        });        
        return temp;
    }
};
