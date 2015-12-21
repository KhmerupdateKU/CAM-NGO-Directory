function createTable() {
    Category = persistence.define('tblcategory', {
        cat_id: 'INT',
        name_kh: 'TEXT',
        name_en: 'TEXT',
        logo: 'TEXT',
        ngo: 'INT'
    });
    Ngos = persistence.define('tblNgo', {
        ngo_id: 'INT',
        cat_id: 'INT',
        cat_name_kh: 'TEXT',
        cat_name_en: 'TEXT',
        name_kh: 'TEXT',
        name_en: 'TEXT',
        name_short: 'TEXT',
        logo: 'TEXT',
    });
    Details = persistence.define('tblDetail', {
        ngo_id: 'INT',
        phone: 'TEXT',
        email: 'TEXT',
        website: 'TEXT',
        address: 'TEXT',
        map: 'TEXT',
        description: 'TEXT'
    });
}
;

