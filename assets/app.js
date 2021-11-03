let cart = [];

const products = [
	{
		id: 'abcd-1234',
		title: 'Graphic Tee',
		image:
			'https://media.istockphoto.com/photos/portrait-of-afro-brazilian-man-picture-id1268488633?b=1&k=20&m=1268488633&s=170667a&w=0&h=Ee-OkqWwP7_rreuQECpAv8-mKO0nAoW5JWZtaW67v7k=',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nisi ad laudantium beatae quam unde accusamus eveniet, dolorum dolor.',
		price: 20,
	},
	{
		id: 'efgh-5678',
		title: 'Bomber Jacket',
		image:
			'https://media.istockphoto.com/photos/man-showing-break-the-rules-tittle-on-tshirt-picture-id684009002?b=1&k=20&m=684009002&s=170667a&w=0&h=yYObPvx--S2i4Szlx4l3GMrdeoI5AuiyZ_zuBQ8zwI4=',
		description:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores in adipisci officiis assumenda saepe, nesciunt culpa laborum.',
		price: 200,
	},
];

const productsWrapper = $('.products-wrapper');
const cartWrapper = $('.cart-items');
const cartTotalWrapper = $('#cart-total');

products.forEach((product) => {
	productsWrapper.append(`
    <div class="col-md-4">
        <div class="card shadow">
        <img src="${product.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${product.title} [ Rs. ${product.price}]</h5>
                <p>${product.description}</p>
                <button data-product-id="${product.id}" class="btn btn-sm btn-success addToCart">Add To Cart</button>
            </div>
        </div>
    </div>`);
});

function checkIfExists(item, cart) {
	if (cart.length > 0) {
		return cart.find((product) => product.id === item.id) != 'undefined' ? true : false;
	}
}

$(document).on('click', '.addToCart', function () {
	const productID = $(this).data('product-id');
	const cartProduct = products.find((p) => p.id === productID);
	if (cartProduct) {
		// const exists = checkIfExists(cartProduct, cart);
		// if (!exists) cart.push(cartProduct);
		cart.push(cartProduct);
	}
	cartWrapper.html(cart.map((item) => `<div>${item.title} - Rs. ${item.price}</div>`));
	cartTotalWrapper.html(cartTotal(cart));
	console.log(`cart`, cart);
});

function cartTotal(cart) {
	return cart.map((item) => item.price).reduce((total, acc) => total + acc, 0);
}
