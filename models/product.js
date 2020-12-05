const db= require('../database/init');
const options = {
  freezeTableName: true,
  tableName: "products",
  modelName: "products",
  createdAt: false,
  updatedAt: false,
};

const Product =  db.sequelize.define(
  "Product",
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
    img_uri: {
      type: db.Sequelize.STRING(255),
      allowNull: true,
    },
    category_id: {
      type: db.Sequelize.INTEGER(11).UNSIGNED,
      allowNull: false,
      references: {
        model: "categories",
        key: "id",
      }
    },
    is_featured: {
      type: db.Sequelize.BOOLEAN,
      allowNull: false
    },

  },
  options
);
module.exports= Product;