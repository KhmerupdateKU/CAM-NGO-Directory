var NgoDetailModel = {
    fetchDetail: function (successCallback, errorCallback) {
        $.ajax({
            type: "POST",
            datatype: "JSON",
            crossDomain: true,
            url: "http://www.camngo.netau.net/index.php/ngodetail/fetchdetailbyngo_id/" + NgoModel.getId(),
            success: successCallback,
            error: errorCallback
        });
    }
};


