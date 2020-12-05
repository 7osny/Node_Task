const db = require("../database/init");
const options = {
  freezeTableName: true,
  tableName: "categories",
  modelName: "categories",
  createdAt: false,
  updatedAt: false,
};

const Category =  db.sequelize.define(
  "Category",
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
    parent_id: {
      type: db.Sequelize.INTEGER(11).UNSIGNED,
      allowNull: true,
      references: {
        model: "categories",
        key: "id",
      },
    },
  },
  options
);

module.exports = Category;
