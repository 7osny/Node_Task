const Sequelize = require('sequelize');
const db= require('../database/init');
const options = {
  freezeTableName: true,
  tableName: "products_providers",
  modelName: "products_providers",
  createdAt: false,
  updatedAt: false,
};

const ProductProvider =  db.sequelize.define(
  "ProductProvider",
  {
    product_id: {
      
      type: db.Sequelize.INTEGER(11).UNSIGNED,
      allowNull: false,
      references: {
        model: "products",
        key: "id",
      }
    },    
    provider_id: {
      
      type: db.Sequelize.INTEGER(11).UNSIGNED,
      allowNull: false,
      references: {
        model: "providers",
        key: "id",
      }
    },
    price: {
      type: db.Sequelize.FLOAT(11).UNSIGNED,
      allowNull: false,
    },
    available: {
      type: db.Sequelize.BOOLEAN,
      allowNull: false,
    }
  },
  options
);
module.exports= ProductProvider;