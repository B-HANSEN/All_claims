import React from 'react';

const Table = ({ filteredClaims }) => {
	// console.log('table props: ', filteredClaims);

	const createClaimsTable = filteredClaims.map((claim, index) => {
		return (
			<tr key={index}>
				<td>{claim.number}</td>
				<td>{claim.amount}</td>
				<td>{claim.description}</td>
				<td>{claim.holder}</td>
				<td>{claim.createdAt}</td>
				<td>{claim.incidentDate}</td>
				<td>{claim.insuredItem}</td>
				<td>{claim.policyNumber}</td>
				<td>{claim.processingFee}</td>
				<td>{claim.status}</td>
			</tr>
		);
	});

	return (
		<section className='table_section'>
			<table className='table'>
				<tr>
					<th>claim ID</th>
					<th>amount</th>
					<th>description</th>
					<th>holder</th>
					<th>created at</th>
					<th>incident date</th>
					<th>insured item</th>
					<th>policy number</th>
					<th>processing fee</th>
					<th>status</th>
				</tr>

				<tbody>{createClaimsTable}</tbody>
			</table>
		</section>
	);
};

export default Table;
