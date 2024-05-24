import PropTypes from "prop-types";

function Product({ name, price, image, inStock = true }) {
	return (
		<div>
			<img src={image} alt={name} />
			<h2>{name}</h2>
			<p>${price.toFixed(2)}</p>
			{image && <img src={img} alt={name} />}
			<p>{inStock ? "In Stock" : "Out of stock"}</p>
		</div>
	);
}

Product.propTypes = {
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	image: PropTypes.string,
	inStock: PropTypes.bool,
};

export default Product;
