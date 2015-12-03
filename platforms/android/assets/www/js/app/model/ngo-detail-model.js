var NgoDetailModel = {
    details: [],
    fetch: function () {
        $.ajax({
            type: "POST",
            datatype: "JSON",
            crossDomain: true,
            url: URL + "index.php/ngodetail/fetchdetail",
            success: function (details) {
                var json = (JSON.parse(details));
                $.map(json, function (detail) {
                    NgoDetailModel.details.push(detail);
                });
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


