var NgoDetailModel = {
    details: [],
    fetch: function () {
        $.ajax({
            type: "GET",
            datatype: "JSON",
            crossDomain: true,
            url: URL + "index.php/ngodetail/fetchdetail",
            success: function (details) {
                NgoDetailModel.details = (JSON.parse(details));
            },
            error: function (e) {
                console.log("error:", e);
            }
        });
    },
    getDetail: function () {
        return NgoDetailModel.details;
    },
    getDetailByNgo_Id: function (ngo_id) {
        var temp = [];
        $.map(NgoDetailModel.getDetail(), function (detail) {
            if (detail.ngo_id === ngo_id) {
                temp.push(detail);
            }
        });
        return temp;
    }
};


