import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const ClaimsTable = ({ filteredClaims }) => {
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
			pagination={paginationFactory({ sizePerPage: 10 })}
		/>
	);
};

export default ClaimsTable;
