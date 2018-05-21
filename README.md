# Add a Related Products Section to a Wix Store Product Page with Wix Code
This repo helps you set up a Related Products section in a Wix Store Product page, using Wix Code. It gives you two methods for relating products to each other. You can either relate products by price range or using a custom relationship you create.
## Setup
This code assumes the following setup. If you have a similar setup on your site and you want to use this code, you'll need to change the IDs listed here to match the ones on your site. 
### Site
1. A Wix Site and add Wix Stores.
2. On the Products page, a Strip with the ID:  relatedItems. This is the continer for the related products.
3. A title to the strip indcating this is a Related Products section.
4. A horizontal repeater in the strip with the ID relatedItemsRepeater. This displays the related products. 
5. The repeater designed to display related products. Each repeated item has the following elements with their corresponding IDs.

   |Element|ID|
   |-------|--|
   |Product title| productName|
   |Product picture| productImage|
   |Product price| productPage|
6. The Product Page element with the ID: productPage.

### Databases
When you work with Wix Code your Store's products are automatically included in a read-only Products collection in your site.

![Product collection](https://github.com/jeffreya/wix-code/blob/master/related_products_DB.png)

To create custom product relationships you'll need another collection on your site with two reference fields: ProductA and ProductB. Each field should refer to one product in the ProductA column and its related product in the ProductB column. In our case it looks like this: 

![relatedProducts collection](https://github.com/jeffreya/wix-code/blob/master/related_products_related.png)

## Code Overview
### Related Products by Price Range
1. Get the ID of the currently displyed product.
2. Query the Products collection for items whose price falls within a specific range, relative to the current item's price.
3. Use the repeater to display the first four results of the query.
4. If there are no results, hide the repeater.

### Custom Related Products
1. Run two parallel queries on the relatedProducts collection. Each query returns the value in the productA or productB columns that relate to the the currently displayed product.
2. Use the results of both queries to create a list of related products.
3. Modify the previous code to first display custom related products and only if there are none, to display related products by price. 

#### See the site in action here: http://code-examples.wixsite.com/shop-related-item
