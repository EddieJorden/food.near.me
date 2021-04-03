import React from 'react';
import Business from './Business.css';

const business = {
	imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
	name: 'MarginOtto Pizzeria',
	address: '1010 Paddington Way',
	city: 'Flavortown',
	state: 'NY',
	zipCode: '10101',
	category: 'Italian',
	rating: 4.5,
	reviewCount: 90,
};

class Business extends React.Component {
	render() {
		<div className="Business">
			<div className="image-container">
				<img
					src="https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg"
					alt=""
				/>
			</div>
			<h2>{Business.name}</h2>
			<div className="Business-information">
				<div className="Business-address">
					<p>{Business.address}</p>
					<p>{Business.city}</p>
					<p>{Business.state}</p>
				</div>
				<div className="Business-reviews">
					<h3>{Business.category}</h3>
					<h3 className="rating">{Business.rating} stars</h3>
					<p>{Business.reviewCount} reviews</p>
				</div>
			</div>
		</div>;
	}
}

export default Business;
