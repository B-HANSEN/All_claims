import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Search from '../../components/search';
import StatusFilter from '../../components/statusFilter';
import ClaimsTable from '../../components/table';
import { getClaimsList } from '../../utility/endpoints';
import './claimsList.css';

const ClaimList = () => {
	const [claims, setClaims] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');
	const [statusFilter, setStatusFilter] = useState('ShowAll');
	console.log('claims length: ', claims.length);

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

	const claimSet = searchQuery ? searchedClaims : claims;

	const filteredClaims = claimSet.filter(claim =>
		statusFilter === 'ShowAll' ? claim : claim.status === statusFilter
	);

	return (
		<div className='ClaimList'>
			<Header />
			<h1>Claim List</h1>
			<section className='Filter'>
				<Search setValue={setSearchQuery} />
				<StatusFilter filter={statusFilter} setFilter={setStatusFilter} />
			</section>
			<Button
				className='mb-2'
				href='/create-claim'
				size='lg'
				variant='outline-success'
			>
				Create a new claim
			</Button>

			<section className='ClaimsTable'>
				<ClaimsTable filteredClaims={filteredClaims} />
			</section>
			{/* <Footer /> */}
		</div>
	);
};

export default ClaimList;
