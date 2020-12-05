
const query ={};
const findQueryString =function(offset,limit)
 { return `
    select A.productsName,A.productsImage,B.productId,B.minPrice,B.providerName
from
(
    select products.name as productsName, products.img_uri as productsImage, products.id as productId
    from categories
    inner join products
    on categories.id = products.category_id
    where categories.name = $1
) as A
 join
(
 select  C.productId, providerId , providerName , available, D.minPrice from 
(
	SELECT providers.id as providerId, providers.name as providerName, products_providers.product_id as productId, price, available   
	from providers 
	join products_providers
	on providers.id = products_providers.provider_id
) as C
join
(
	select product_id as productId, min(price) as minPrice
	from products_providers
	group by product_id
)as D
on C.productId = D.productId
where C.price = D.minPrice 
) as B
on A.productId = B.productId
limit ${limit}
offset ${offset}`;
}
const countQueryString=`
select count(B.productId) as count
from
(
    select products.name as productsName, products.img_uri as productsImage, products.id as productId
    from categories
    inner join products
    on categories.id = products.category_id
    where categories.name = $1
) as A
 join
(
 select  C.productId, providerId , providerName , available, D.minPrice from 
(
	SELECT providers.id as providerId, providers.name as providerName, products_providers.product_id as productId, price, available   
	from providers 
	join products_providers
	on providers.id = products_providers.provider_id
) as C
join
(
	select product_id as productId, min(price) as minPrice
	from products_providers
	group by product_id
)as D
on C.productId = D.productId
where C.price = D.minPrice 
) as B
on A.productId = B.productId`;

query.countQueryString = countQueryString;
query.findQueryString = findQueryString;
module.exports=query;

