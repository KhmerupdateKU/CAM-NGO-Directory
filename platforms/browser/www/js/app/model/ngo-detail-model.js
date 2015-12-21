var NgoDetailModel = {
    fetchDetailByngo_id: function (ngo_id, successCallback) {
        $.ajax({
            url: URL + "index.php/ngodetail/fetchdetailbyngo_id/" + ngo_id,
            success: successCallback,
        });
    }
};


