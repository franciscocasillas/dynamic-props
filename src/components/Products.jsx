import Product from "./Product";

function Product({ products }) {
	return (
		<section>
			<h1>Our products</h1>
			<ul>
				{products.map((product) => (
					<li key={product.name}>
						<Product {...product} />
					</li>
				))}
			</ul>
		</section>
	);
}
