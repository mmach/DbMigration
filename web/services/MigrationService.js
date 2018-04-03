import * as Const from './../const.js';

export default class MigrationService {
    constructor($http) {
        this.path = 'migration';
        this.http = $http;
        console.log(Const);
        
    }

    uploadMigration(up,down,title){
        var req = {
            method: 'POST',
            url: [Const.base_url, 'migration', `add`].join('/'),
            data: {up,down,title}
            
        };
        return this.http(req);
    }
    ///MasterData/purchaseOrder?externalItemID=&organisation=10011&page=0&purchOrderID=
    gs1_128(id) {
        return this.http.get([Const.base_url, this.path, `gs1_128?barcode=${id}`].join('/'));
    }
  



};