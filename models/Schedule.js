const db = require('./Db');

const Schedule = db.sequelize.define('schedules', {
    client_id: {
        type: db.Sequelize.BIGINT
    },
    animal_id: {
        type: db.Sequelize.BIGINT
    },
    service_id: {
        type: db.Sequelize.BIGINT
    },
    datetime: {
        type: db.Sequelize.DATE
    },
    payment: {
        type: db.Sequelize.STRING
    },
    observation: {
        type: db.Sequelize.TEXT
    }
});
module.exports = Schedule;
Schedule.sync({ force: true });