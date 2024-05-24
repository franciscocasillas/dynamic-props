import Product from "./Product";
import { products } from "../data/products";

function Products() {
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

export default Products;
