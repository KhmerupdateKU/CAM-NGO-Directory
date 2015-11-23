var NgoDetailModel = {
    fetchDetail: function (successCallback, errorCallback) {
        $.ajax({
            type: "POST",
            datatype: "JSON",
            crossDomain: true,
            url: "http://localhost:8088/Ad-ngos/index.php/ngodetail/fetchdetailbyngo_id/" + NgoModel.getId(),
            success: successCallback,
            error: errorCallback
        });
    }
};


