import React from 'react';
import ClaimsForm from '../../components/form';
import Header from '../../components/header';
import './createClaim.css';

const CreateClaim = () => {
	return (
		<div className='CreateClaim'>
			<Header />
			<section className='CreateClaim__MainSection'>
				<h1>Create Claim</h1>
				<ClaimsForm />
			</section>
		</div>
	);
};

export default CreateClaim;
