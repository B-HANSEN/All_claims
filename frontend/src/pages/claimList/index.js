import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Search from '../../components/search';
import StatusFilter from '../../components/statusFilter';
import Table from '../../components/table';
import { getClaimsList } from '../../utility/endpoints';
import './claimsList.css';

const ClaimList = () => {
	const [claims, setClaims] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');
	const [statusFilter, setStatusFilter] = useState('ShowAll');
	console.log('PARENT searchQuery: ', searchQuery);

	useEffect(() => {
		const fetchClaims = async () => {
			let results = await getClaimsList();
			setClaims(results);
		};
		fetchClaims();
	}, []);

	const searchedClaims = claims.filter(
		claim =>
			claim.number === searchQuery ||
			claim.holder === searchQuery ||
			claim.policyNumber === searchQuery
	);

	// TODO: update filteredClaims function
	// if !searchQuery, filter through claims
	// else filter through searchedClaims

	const filteredClaims = claims.filter(claim =>
		statusFilter === 'ShowAll' ? claim : claim.status === statusFilter
	);

	return (
		<div className='ClaimList'>
			<Header />
			<h1>Claim List</h1>
			<section className='ClaimList_Filter'>
				<Search value={searchQuery} setValue={setSearchQuery} />
				<StatusFilter filter={statusFilter} setFilter={setStatusFilter} />
			</section>
			<Link to='create-claim'>Create Claim</Link>
			{/* 
				TODO: how to handle sorting by certain columns
			*/}
			<Table filteredClaims={filteredClaims} />

			{/* <Footer /> */}
		</div>
	);
};

export default ClaimList;
