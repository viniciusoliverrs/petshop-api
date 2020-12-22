const db = require('./Db');

const Animal = db.sequelize.define('animals', {
    tamanho: {
        type: db.Sequelize.STRING
    },
    raca: {
        type: db.Sequelize.STRING
    }
});
module.exports = Animal;
//Animal.sync({ force: true });