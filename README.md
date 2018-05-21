# Add a Related Products Section to a Wix Store Product Page with Wix Code
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
When you work with Wix Code your Store products are automatically included in a read-only Products collection in your site.

![Product collection](https://github.com/jeffreya/wix-code/blob/master/related_products_DB.png)

## Code Overview

