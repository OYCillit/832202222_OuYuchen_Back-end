const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('address_book', 'root', 'ouyubang791120', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,

    define: {
        freezeTableName: true,
        timestamps: false,
    }
});

module.exports = sequelize
