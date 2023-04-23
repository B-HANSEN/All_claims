import { formatDate } from './helper';

export const getClaimsList = async () => {
	const claimsUrl = 'http://localhost:8001/api/v1/claims';

	// let addSeparators = n => {
	// 	let string = n.toLocaleString('en-US');
	// 	return +Intl.NumberFormat('en-US').format(n);
	// };

	try {
		let response = await fetch(claimsUrl, {
			// method: 'GET',
			// headers: { 'Content-Type': 'application/json' },
		});
		let data = await response.json();
		// console.log('endpoint data: ', data);

		var allClaims = [];

		data.map(item => {
			const mappedData = {
				// TODO: either correct sorting with incorrect formatting or
				// strings with correct decimals but string sorting
				// toFixed(2) has not effect below
				amount: Number(parseFloat(item.amount).toFixed(2)),
				createdAt: item.createdAt,
				description: item.description,
				holder: item.holder,
				id: item.id,
				incidentDate: item.incidentDate,
				insuredItem: item.insuredItem,
				number: item.number,
				policyNumber: item.policyNumber,
				processingFee: Number(parseFloat(item.processingFee).toFixed(2)),
				status: item.status,
				totalFee:
					Number(parseFloat(item.amount).toFixed(2)) +
					Number(parseFloat(item.processingFee).toFixed(2)),
			};
			allClaims.push(mappedData);
		});

		// console.log('allClaims: ', allClaims);
		// return data;
		return allClaims;
	} catch (err) {
		throw err.message;
	}
};
