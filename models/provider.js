const Sequelize = require("sequelize");
const db = require("../database/init");
const options = {
  freezeTableName: true,
  tableName: "providers",
  modelName: "providers",
  createdAt: false,
  updatedAt: false,
};

const Provider =  db.sequelize.define(
  "Provider",
  {
    id: {
      autoIncrement: true,
      type: db.Sequelize.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: db.Sequelize.STRING(45),
      allowNull: false,
      unique: true,
    },
  },
  options
);
module.exports = Provider;
