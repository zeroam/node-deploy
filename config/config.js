require('dotenv').config();

module.exports = {
  development: {
    username: process.env.SEQUELIZE_USER,
    password: process.env.SEQUELIZE_PASSWORD,
    database: "nodebird",
    host: "zeroam.iptime.org",
    dialect: "mysql",
    operatorAliases: 'false'
  },
  production: {
    username: process.env.SEQUELIZE_USER,
    password: process.env.SEQUELIZE_PASSWORD,
    database: "nodebird",
    host: "zeroam.iptime.org",
    dialect: "mysql",
    operatorAliases: 'false',
    logging: false,
  },
};
