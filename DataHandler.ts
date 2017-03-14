import fs = require('fs');
var data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
import util = require('util');

 class DataHandler {

    constructor() {
    }

    getAllData() {
        if (data == undefined || data.items == undefined) {
            return {
                is_success: false,
                msg: "No database"
            };
        }
        return {
            is_success: true,
            items: data.items
        };
    }

    getData(qr_code: string) {
        if (data == undefined || data.items == undefined) {
            return {
                is_success: false,
                msg: "No database"
            };
        }
        var items = data.items;
        for (var i = 0; i < items.length; i++) {
            if (items[i].qr_code == qr_code) {
                return {
                    is_success: true,
                    item: items[i]
                };
            }
        }
        return {
            is_success: false,
            msg: "QR Code does not found!!"
        };
    }
}

export { DataHandler };