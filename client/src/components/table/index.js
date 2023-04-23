import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import './claimsTable.css';

const ClaimsTable = ({ filteredClaims }) => {
	// console.log('table props: ', filteredClaims);
	const columns = [
		{
			dataField: 'number',
			text: 'Claim ID',
		},
		{
			dataField: 'status',
			text: 'Status',
		},
		{
			dataField: 'amount',
			text: 'Amount',
			sort: true,
		},
		{
			dataField: 'holder',
			text: 'Holder',
		},
		{
			dataField: 'policyNumber',
			text: 'Policy number',
		},
		{
			dataField: 'insuredItem',
			text: 'Insured item',
		},
		{
			dataField: 'description',
			text: 'Description',
		},
		{
			dataField: 'incidentDate',
			text: 'Incident date',
		},
		{
			dataField: 'processingFee',
			text: 'Processing fee',
			sort: true,
		},
		{
			dataField: 'totalFee',
			text: 'Total amount',
			sort: true,
		},
		{
			dataField: 'createdAt',
			text: 'Created at',
			sort: true,
		},
	];

	return (
		<BootstrapTable
			keyField='id'
			data={filteredClaims}
			columns={columns}
			striped
			hover
			condensed
			bootstrap4
		/>
	);
};

export default ClaimsTable;

// const createClaimsTable = filteredClaims.map((claim, index) => (
// 	<tr key={index}>
// 		<td>{claim.number}</td>
// 		<td>{claim.status}</td>
// 		<td>{claim.amount}</td>
// 		<td>{claim.holder}</td>
// 		<td>{claim.policyNumber}</td>
// 		<td>{claim.insuredItem}</td>
// 		<td>{claim.description}</td>
// 		<td>{claim.incidentDate}</td>
// 		<td>{claim.processingFee}</td>
// 		<td>{claim.createdAt}</td>
// 	</tr>
// ));
