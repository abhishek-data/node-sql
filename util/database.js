const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "abhi", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;

