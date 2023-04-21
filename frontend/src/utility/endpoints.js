export const getClaimsList = async () => {
	const claimsUrl = 'http://localhost:8001/api/v1/claims';

	try {
		let response = await fetch(claimsUrl);
		let data = await response.json();

		return data;
	} catch (err) {
		throw err.message;
	}
};
