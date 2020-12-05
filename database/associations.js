const Category =require('../models/category');
const Product =require('../models/product');
const Provider =require('../models/provider');
const ProductProvider =require('../models/productProvider');

Product.belongsTo(Category,{
    foreignKey: 'category_id',
    as: 'category',
});

Category.hasMany(Product,{
    foreignKey: 'category_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
  as: 'products'
});

Product.belongsToMany(Provider,{
    through: ProductProvider,
  foreignKey: 'product_id',
  otherKey: 'provider_id',
  as: 'providers'

});

Provider.belongsToMany(Product,{
    through: ProductProvider,
  foreignKey: 'provider_id',
  otherKey: 'product_id',
  as: 'products'

})

