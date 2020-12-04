import React from "react";

const Product = (product) => {
	return (
		<div className="product_container">
			<div className="image_container">
				<img src={product.img} alt={product.name} />
			</div>
			<div>
				<h3><a href={product.url} target="_blank" rel="noopener noreferrer">{product.name}</a></h3>
				<p className="product_description">{product.description}</p>
				<span>
					{product.tags.map(tag => (
						<button>{tag}</button>
					))}
				</span>
			</div>
			<div className="votes" onClick={() => product.upvote(product.id)}>
				<span className="angle_up">▲</span>
				<button
					className="votes_count"
				>
					{product.votes}
				</button>
			</div>
		</div>
	);
}

export default Product;
