//Use the following code to add a related-products functionality on a site with Wix Stores.
//In this example, we're using two strategies for associating related products, but you can see how you can easily implement any other strategy using the methods provided here.
//Once you have a Wix Stores site and enable Code in the editor, you will have access to the Stores collections in your Database folder
//and you'll be able to use the relevant APIs in the Code panel.

import wixData from 'wix-data';
import wixLocation from 'wix-location';

$w.onReady(function () {
	loadRelatedProducts();
});

//This function is different from the one with 1 strategy
async function loadRelatedProducts() {
	let product = await $w('#productPage').getProduct();
	let relatedProductResults = await Promise.all([
		relatedProductsByTable(product),
		relatedProductsByPrice(product)
		]);
		
	if (relatedProductResults[0].length > 0)
		showRelatedProducts(relatedProductResults[0]);
	else
		showRelatedProducts(relatedProductResults[1]);
}

//This is the second strategy
async function relatedProductsByTable(product) {
	let productId = product._id;

	// find related products by relation table
	let relatedByTable = await Promise.all([
		wixData.query('relatedProducts')
		.eq('productA', productId)
		.include('productB')
		.find(),
		wixData.query('relatedProducts')
		.eq('productB', productId)
		.include('productA')
		.find()
	]);

	let relatedProducts = [
		...relatedByTable[0].items.map(_ => _.productB),
		...relatedByTable[1].items.map(_ => _.productA)
	];
	return relatedProducts;
}

async function relatedProductsByPrice(product) {
	let productId = product._id;

	// find related products by price
	let relatedByPrice = await wixData.query('Stores/Products')
		.between('price', product.price * 0.8, product.price * 1.2)
		.ne('_id', productId)
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
