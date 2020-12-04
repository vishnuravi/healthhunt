import React, { useState, useEffect } from "react";
import Product from "./Product";
import SignInModal from "./SignInModal";
import firebase from "firebase";

const Designs = () => {

	const [data, setData] = useState([]);

	const [sortBy, setSortBy] = useState('votes');

	const [modalShow, setModalShow] = useState(false);

	const db = firebase.firestore();

	const upvote = (id) => {
		setModalShow(true);
		// let updatedData = data.map(design => {
		// 	if (design.id === id) {
		// 		design.votes += 1;
		// 	}
		// 	return design;
		// });
		// setData(updatedData);
	};

	const fetchDesigns = () => {
		db.collection('design').orderBy(sortBy, 'desc').get().then((querySnapshot) => {
			querySnapshot.forEach((design) => {
				const designData = { id: design.id, ...design.data() };
				setData(data => [...data, designData]);
			})
		});
	}

	useEffect(() => {
		fetchDesigns();
	}, []);

	return (
		<>
			<img src={process.env.PUBLIC_URL + '/hospital_building.png'} width="100%" alt="" className="mb-4 mt-4" style={{ borderRadius: '10px' }} />

			<h4 className="mt-4">Latest in Healthcare Design</h4>

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
export default Designs;
