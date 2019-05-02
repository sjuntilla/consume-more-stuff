const bookshelf = require('../bookshelf');

class Item extends bookshelf.Model {
    get tableName() { return "items"; }
    get hasTimestamps() { return false; }
}

module.exports = bookshelf.model('Item', Item);