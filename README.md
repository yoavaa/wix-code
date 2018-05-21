# Add a Related Products Section to a Wix Store Product Page with Wix Code
## Setup
1. Create a Wix Site and add Wix Stores.
2. On the Products page, add a Strip. This will be the continer for the related products.
   1. Give the strip the ID:  relatedItems.
3. Add a title to the strip indcating this is a Related Products section.
4. Add a horizontal repeater to the strip. This will display the related products. 
5. Design the repeater to display related products. Each repeated item should have the following elements with their corresponding IDs.

   |Element|ID|
   |-------|--|
   |Product title| productName|
   |Product picture| productImage|
   |Product price| productPage|
