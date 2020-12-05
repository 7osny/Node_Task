const { body } = require("express-validator");

const validate =[
    body('categoryName').isAlphanumeric(),
    body('page').isInt(),
    body('pageSize').isInt(),
    body('productName').isAlphanumeric()
  ]
  module.exports=validate;