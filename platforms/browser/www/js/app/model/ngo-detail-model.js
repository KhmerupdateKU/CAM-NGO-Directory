var NgoDetailModel={
    ngoId:null,
    ngodetailmodel:[],
    setNgoDetail:function (){
        NgoDetailModel.ngodetailmodel.push(
                {"id":"1","cat_id":"1","ngo_id":"","cat_name":"Technology","ngo_name":"InSTEDD","description":"Work on Technology field","phone":"023 4444 23","website":"www.gohom.now","address":"In cambodia"},
                {"id":"2","cat_id":"1","ngo_id":"","cat_name":"Technology","ngo_name":"Development Inovetion","description":"Work on Technology field","phone":"023 4444 23","website":"www.gohom.now","address":"In cambodia"},
                {"id":"3","cat_id":"9","ngo_id":"","cat_name":"Technology","ngo_name":"Cambodian Human Right Center","description":"Work on Technology field","phone":"023 4444 23","website":"www.gohom.now","address":"In cambodia"},
                {"id":"4","cat_id":"2","ngo_id":"","cat_name":"Technology","ngo_name":"Education Center","description":"Work on Technology field","phone":"023 4444 23","website":"www.gohom.now","address":"In cambodia"},
                {"id":"5","cat_id":"3","ngo_id":"","cat_name":"Technology","ngo_name":"Development Inovetion","description":"Work on Technology field","phone":"023 4444 23","website":"www.gohom.now","address":"In cambodia"},
                {"id":"5","cat_id":"1","ngo_id":"","cat_name":"Technology","ngo_name":"TechnoLogy of Cambodia","description":"Work on Technology field","phone":"023 4444 23","website":"www.gohom.now","address":"In cambodia"},
                {"id":"9","cat_id":"5","ngo_id":"","cat_name":"Technology","ngo_name":"Development Inovetion","description":"Work on Technology field","phone":"023 4444 23","website":"www.gohom.now","address":"In cambodia"},
                {"id":"3","cat_id":"6","ngo_id":"","cat_name":"Technology","ngo_name":"Development Inovetion","description":"Work on Technology field","phone":"023 4444 23","website":"www.gohom.now","address":"In cambodia"},
                {"id":"4","cat_id":"7","ngo_id":"","cat_name":"Technology","ngo_name":"អង្គការការពារការជួញដូរផ្លូវភេទ","description":"Work on Technology field","phone":"023 4444 23","website":"www.gohom.now","address":"In cambodia"},
                {"id":"5","cat_id":"8","ngo_id":"","cat_name":"Technology","ngo_name":"Development Inovetion","description":"Work on Technology field","phone":"023 4444 23","website":"www.gohom.now","address":"In cambodia"},
                {"id":"5","cat_id":"10","ngo_id":"","cat_name":"Technology","ngo_name":"Development Inovetion","description":"Work on Technology field","phone":"023 4444 23","website":"www.gohom.now","address":"In cambodia"}
       
        );
    },
    getNgoDetails:function (){                       
        return NgoDetailModel.ngodetailmodel;
    },
    setNgoId:function (id){
        NgoDetailModel.ngoId=id;
    },
    getNgoId:function (){
        return NgoDetailModel.ngoId;
    }
};


