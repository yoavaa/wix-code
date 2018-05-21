# Add a Related Products Section to a Wix Store Product Page with Wix Code
This repo helps you set up a Related Products section in a Wix Store Product page, using Wix Code. It gives you two methods for relating products to each other. You can either relate products by price range or using a custom relationship you create.
## Setup
This code assumes the following setup. If you have a similar setup on your site and you want to use this code, there's a list of all the things you'll need to change to get this code to work on your site, at the bottom of this readme.
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

To create custom product relationships you'll need another collection on your site with two reference fields: ProductA and ProductB. Each field should refer to one product in the ProductA column and its related product in the ProductB column. In our case it lloks like this: 
![relatedProducts collection](https://github.com/jeffreya/wix-code/blob/master/related_products_related.png)

## Code Overview
