function createTables(){
    Category=persistence.define('category',{
        cat_id:"INT",
        name_kh:"TEXT",
        name_en:"TEXT",
        logo:"TEXT",
        ngo:"INT"
        
    });
    
}
