var CategoryOfflineModel = {
    add: function (Category) {
        $.map(Category, function (cat) {
            var tbcat = new  tbcat{
                cat_id: cat.cat_id,
                name_kh: cat.name_kh,
                name_en: cat.name_en,
                logo: cat.logo,
                ngo: cat.ngo
            };
            
        });
persistence.flush();

    },
    update: function (oldCat, newCat){
        $.map(newCat, function (newCat){
            var isNew = true;
            $.each(oldCat, function  (i, oldCat){
                if(odlCat.cat_id()== newCat){
                    isNew = false;
                    oldCat.name_kh(newCat.name_kh);
                    oldCat.name_en(newCat.name_en);
                    odlCat.logo(newCat.logo);
                    oldCat.ngo(newCat.ngo);
                    return false;
                }
                else {
                    isNew= true;
                }
                
            });
            if(isNew){
                CategoryOfflineModel.add(newCat);
                
            }
        });
        persistence.flush();
    },
    fetchAll: function (callback){
        Category.all.list(callback);
    },
   
};