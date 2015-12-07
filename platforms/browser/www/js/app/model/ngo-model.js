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
    fetch: function () {
        $.ajax({
            type: "GET",
            datatype: "JSON",
            crossDomain: true,
            url: URL + "index.php/ngo/fetchngo",
            success: function (ngos) {
                NgoModel.ngos = (JSON.parse(ngos));
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
        $.map(NgoModel.getNgos(), function (ngos) {
            if (ngos.cat_id === cat_id) {
                temp.push(ngos);
            }
        });
        return temp;
    }
};
