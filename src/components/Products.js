import React, { useState, useEffect } from "react";
import Product from "./Product";
import SignInModal from "./SignInModal";
import firebase from "firebase";
import { Alert, Button } from "react-bootstrap";

const Products = () => {

	const [data, setData] = useState([]);

	const [sortBy, setSortBy] = useState('votes');

	const [modalShow, setModalShow] = useState(false);

	const db = firebase.firestore();

	const upvote = (id) => {
		setModalShow(true);
		// let updatedData = data.map(product => {
		// 	if (product.id === id) {
		// 		product.votes += 1;
		// 	}
		// 	return product;
		// });
		// setData(updatedData);
	};

	const fetchProducts = () => {
		setData([]);
		db.collection('products').orderBy(sortBy, 'desc').get().then((querySnapshot) => {
			querySnapshot.forEach((product) => {
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
				<Alert className="mt-2 p-4" onClose={() => setShowWelcome(false)} style={{ background: '#FFFDFD', boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.05)' }} dismissible>
					<img src={process.env.PUBLIC_URL + '/health-innovation-splash.png'} width="100%" alt="" className="mb-4 mt-4" style={{ borderRadius: '10px' }} />
					<p className="light-blue" style={{ fontSize: "2em" }}>Hi there!</p>
					<p style={{ fontSize: "1.75em" }}>We take <span className="light-blue">health implementation science</span> seriously.</p>
					<p className="lead">Are you a healthcare provider preparing for your next innovation programme?
					Or perhaps you have mastered the secrets of successful service redesign?
				Perhaps you have a clever API you want the world to know about?</p>
					<Button variant="outline-dark">Join our community of h-hunters!</Button>
				</Alert>
			}

			<h4 className="mt-4">Latest Innovations</h4>

			{data.map(product => (
				<Product {...product} upvote={upvote} />
			))}

			<SignInModal
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>

		</>
	)
}

export default Products;
