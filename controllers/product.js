const Product = require("../models/product");
const Category = require("../models/category");
const Provider = require("../models/provider");
const db = require("../database/init");
const {
  validationResult
} = require("express-validator");
const query = require("../database/query");
const getAllProducts = async function (req, res, next) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }
    const { page = 0, pageSize = 10 } = req.body;
    let offset = parseInt(page) * parseInt(pageSize);
    let limit = parseInt(pageSize);

    const [products] = await db.sequelize.query(
      query.findQueryString(offset, limit), {
        bind: [req.body.categoryName],
      }
    );
    const total = await db.sequelize.query(query.countQueryString, {
      bind: [req.body.categoryName],
    });
    const results = {
      total: total[0][0].count,
      products: products,
    };
    res.status(200).send(results);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};


const toggle = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }
    const products = await Product.findOne({
      where: {
        name: req.body.productName
      }
    });

    if (products) {
      if (products.is_featured) {
        const result = await products.update({
          is_featured: false
        });
        res.status(200).send(result);
      } else {
        const result = await products.update({
          is_featured: true
        });
        res.status(200).send(result);
      }
    } else {
      return res.status(404).send('product not found');

    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};


const createProduct = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }  
    const data= {
      
    }
    const products= await Product.create()
  }catch (error) {
    return res.status(500).send(error.message);
  }
}
module.exports = {
  getAllProducts,
  toggle,
};