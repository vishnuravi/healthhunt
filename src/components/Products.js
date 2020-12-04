import React, { useState, useEffect } from "react";
import Product from "./Product";
import firebase from "firebase";
import { Alert, Button } from "react-bootstrap";

const Products = () => {

	const [data, setData] = useState([]);

	const db = firebase.firestore();

	const upvote = (id) => {
		let updatedData = data.map(product => {
			if (product.id === id) {
				product.votes += 1;
			}
			return product;
		});
		setData(updatedData);
	};

	const fetchProducts = () => {
		db.collection('products').get().then((querySnapshot) => {
			querySnapshot.forEach((product) => {
				console.log(product.data().name);
				const productData = { id: product.id, ...product.data() };
				setData(data => [...data, productData]);
			})
		});
	}

	useEffect(() => {
		fetchProducts();
	}, []);

	const [showWelcome, setShowWelcome] = useState(true);

	return (
		<>
			{ showWelcome &&
				<Alert className="mt-2 p-4" onClose={() => setShowWelcome(false)} style={{ background: '#FFFDFD',  boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.05)' }} dismissible>
					<img src={process.env.PUBLIC_URL + '/health-innovation-splash.png'} width="100%" alt="" className="mb-4 mt-4" style={{ borderRadius: '10px'}} />
					<p style={{ color: "#00A8E8", fontSize: "2em" }}>Hi there!</p>
					<p style={{ color: "#6f6f6f", fontSize: "1.75em" }}>We take health implementation science <span style={{color: '#00A8E8', textDecoration: 'underline' }}>seriously</span>.</p>
					<p className="lead">Are you a healthcare provider preparing for your next innovation programme?
					Or perhaps you have mastered the secrets of successful service redesign?
				Perhaps you have a clever API you want the world to know about?</p>
					<Button variant="outline-dark">Join our community of H-hunters!</Button>
				</Alert>
			}

			<h4 className="mt-4">Latest Innovations</h4>

			{data.map(product => (
				<Product {...product} upvote={upvote} />
			))}

		</>
	)
}
export default Products;
