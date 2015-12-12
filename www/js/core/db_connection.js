function connectionDB(dbname, size) {
    persistence.store.websql.config(
            persistence, dbname, '0.0.1', 'CAM NGO', size, 0, 2);
    persistence.schemaSync();
}
;


