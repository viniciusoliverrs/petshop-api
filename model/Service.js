const db = require('./Db');

const Service = db.sequelize.define('services', {
    name: {
        type: db.Sequelize.STRING
    },
    preco: {
        type: db.Sequelize.STRING
    }
});
module.exports = Service;
//Service.sync({ force: true });