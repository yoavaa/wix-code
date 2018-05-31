//Use the following code to add related products functionality on a site with Wix Stores.
//In this example we're using 1 strategy for associating related products, but you can see how you can easily implement any other strategy using the method provided here.
//Once you have a Wix Stores site and enable Code in the editor, you will have access to the Stores collections in your Database folder
//and you'll be able to use the relevant APIs from the Code panel.

import wixData from 'wix-data';
import wixLocation from 'wix-location';

$w.onReady(function () {
	loadRelatedProducts();
});

//This function is different from the one with 2 strategies
async function loadRelatedProducts() {
	let product = await $w('#productPage').getProduct();
	let relatedProductResults = await relatedProductsByPrice(product);
		
	showRelatedProducts(relatedProductResults);
}

async function relatedProductsByPrice(product) {
	let relatedByPrice = await wixData.query('Stores/Products')
		.between('price', product.price * 0.8, product.price * 1.2)
		.ne('_id', product._id)
		.find();
	return relatedByPrice.items;
}

function showRelatedProducts(relatedProducts){
	if(relatedProducts.length > 0){
	    relatedProducts.splice(4, relatedProducts.length);
		$w('#relatedItemsRepeater').onItemReady(relatedItemReady);
		$w("#relatedItemsRepeater").data = relatedProducts;
		$w("#relatedItems").expand();
	}
	else {
		$w("#relatedItems").collapse();
	}
}

function relatedItemReady($w, product){
	$w("#productImage").src = product.mainMedia;
	$w("#productName").text = product.name;
	$w("#productPrice").text = product.formattedPrice;
	$w('#productImage').onClick(() => {
		wixLocation.to(product.productPageUrl);
	});
}
