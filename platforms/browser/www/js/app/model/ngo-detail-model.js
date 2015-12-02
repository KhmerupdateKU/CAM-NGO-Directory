var NgoDetailModel = {
    fetchDetail: function (successCallback, errorCallback) {
        $.ajax({
            type: "POST",
            datatype: "JSON",
            crossDomain: true,
            url: URL + "index.php/ngodetail/fetchdetailbyngo_id/" + NgoModel.getId(),
            success: successCallback,
            error: errorCallback
        });
    }
};


