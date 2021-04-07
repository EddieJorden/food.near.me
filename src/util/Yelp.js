const apiKey =
	'uXhT21HKIuzLaGHUUGkGigA6H5U7K18_rD1Kjv1opRgJJ668jR8XXWqU-zculxsC0n_Vk0j05of_IkBAJ7lZr9L6Sw92GdUV1tOeWiIsxy-1H9lJuwqQCDkUKgluYHYx';

const Yelp = {
	search(term, location, sortBy) {
		return fetch(
			`https://cors-anywhere.herokuapp.com/?term=${term}&location=${location}&sort_by=${sortBy}`,
			{ headers: { Authorization: `Bearer ${apiKey}` } }
		)
			.then((response) => {
				return response.json();
			})
			.then((jsonResponse) => {
				if (response.businesses) {
					return jsonResponse.businesses.map((business) => {
						return {
							id: business.id,
							imageSrc: business.imageSrc,
							name: business.name,
							address: business.address,
							city: business.city,
							state: business.state,
							zipCode: business.zipCode,
							category: business.category,
							rating: business.rating,
							reviewCount: business.reviewCount,
						};
					});
				}
			});
	},
};

export default Yelp;
