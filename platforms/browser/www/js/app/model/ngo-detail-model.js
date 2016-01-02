var NgoDetailModel = {
    fetchDetailByngo_id: function (ngo_id, successCallback) {
        App.ajaxRequest("index.php/ngodetail/fetchdetailbyngo_id/" + ngo_id, successCallback);
    }
};


