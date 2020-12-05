var express = require('express');
const  validate  = require('../config/validation');
var router = express.Router();
const {getAllProducts,toggle}=require('../controllers/product')
router.get('/',validate ,getAllProducts);
router.put('/',validate,toggle );
module.exports = router;
