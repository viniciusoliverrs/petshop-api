const db = require('./Db');

const Animal = db.sequelize.define('animals', {
    size: {
        type: db.Sequelize.STRING
    },
    breed: {
        type: db.Sequelize.STRING
    }
});
module.exports = Animal;
Animal.sync({ force: true });