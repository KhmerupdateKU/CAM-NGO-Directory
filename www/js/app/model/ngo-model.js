var NgoModel = {    
    id:null,
    name:null,
    getName:function (){
        return NgoModel.name;
    },
    setId:function (id){
        NgoModel.id=id;
    },
    getId:function (){
        return NgoModel.id;
    },
    setName:function (name){
        NgoModel.name=name;
    },
    fetByCat_id: function (successCallback, errorCallback) {
        $.ajax({
            type: "POST",
            datatype: "JSON",
            crossDomain: true,
            url: "http://www.camngo.netau.net/index.php/ngo/fetchngobycat_id/" + CategoryModel.getId(),
            success: successCallback,
            error: errorCallback
        });
    },
};
