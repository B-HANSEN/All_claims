import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Search from '../../components/search';
import Select from '../../components/select';
import Table from '../../components/table';
import { getClaimsList } from '../../utility/endpoints';
import './claimsList.css';

const ClaimList = () => {
	const [filter, setFilter] = useState('Approved');
	const [claims, setClaims] = useState([]);
	console.log('local state, claims: ', typeof claims, claims.length, claims);
	console.log(
		'local state, single claim: ',
		typeof claims[0],
		claims[0],
		claims[0]?.number
	);
	// console.log('local state, val: ', val);

	useEffect(() => {
		const fetchClaims = async () => {
			let results = await getClaimsList();
			setClaims(results);
		};
		fetchClaims();
	}, []);
	// TODO: when filter changes, call utility function that filters out
	// first call to backend, filter to be done in frontend

	const createClaimsTable = claims.map((claim, index) => {
		return (
			<tr key={index}>
				<td>{claim.number}</td>
				<dtdv>{claim.amount}</dtdv>
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

	const Select = (
		<select
			id='status'
			value={filter}
			onChange={e => {
				setFilter(e.target.value);
			}}
			className=''
		>
			<option value='Submitted'>Submitted</option>
			<option value='Approved'>Approved</option>
			<option value='Processed'>Processed</option>
			<option value='Completed'>Completed</option>
			<option value='Rejected'>Rejected</option>
		</select>
	);

	return (
		<div className='ClaimList'>
			<Header />
			<h1>Claim List</h1>
			<section className='ClaimList_Filter'>
				<Search />
				{Select}
			</section>
			<Link to='create-claim'>Create Claim</Link>
			{/* 
				TODO: how to handle sorting by certain columns
			*/}
			{/* 
				loop through results and create a table row for every array index
				TODO: how to build a table from an array of objects
			 */}
			<Table />
			<section class='table_section'>
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

			{/* <Footer /> */}
		</div>
	);
};

export default ClaimList;
