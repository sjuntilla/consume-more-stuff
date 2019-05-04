const User = require('./models/User');
const Item = require('./models/Item');

module.exports = function (req, res, next) {
    req.database = { User, Item };
    next();
}