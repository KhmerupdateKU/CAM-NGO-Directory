function createTable() {
    Category = persistence.define('tblcategory', {
        cat_id: 'INT',
        name_kh: 'TEXT',
        name_en: 'TEXT',
        logo: 'TEXT',
        ngo: 'INT'
    });
}
;

