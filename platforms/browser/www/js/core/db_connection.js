function connectionDB(dbname, size) {
    /* For Web sql     
     persistence.store.websql.config(
     persistence, dbname, '0.0.1', 'CAM NGO', size, 0, 2);
     persistence.schemaSync();
     */
    if (window.openDatabase || window.sqlitePlugin) {
        persistence.store.websql.config(
                persistence, dbname, '0.0.1', 'CAM NGO', size, 0, 2);
        persistence.schemaSync();
    } else
        alert("Your device must support database connection")
}
;


