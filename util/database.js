const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "battousai", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
