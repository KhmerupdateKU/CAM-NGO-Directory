var NgoDetailModel = {
    fetchDetail: function (successCallback) {
        $.ajax({
            url: URL + "index.php/ngodetail/fetchdetailbyngo_id/" + NgoModel.getId(),
            success: successCallback,            
        });
    }
};


