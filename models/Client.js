const db = require('./Db');

const Client = db.sequelize.define('clients', {
    name: {
        type: db.Sequelize.STRING
    },
    telephone: {
        type: db.Sequelize.STRING
    }
});
module.exports = Client;
Client.sync({ force: true });