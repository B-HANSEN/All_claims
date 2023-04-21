import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer';
import Form from '../../components/form';
import Header from '../../components/header';

const CreateClaim = () => {
	return (
		<>
			<Header />
			<h1>Create Claim</h1>
			<Form />
			<Link to='/'>Claim List</Link>
			<Footer />
		</>
	);
};

export default CreateClaim;
