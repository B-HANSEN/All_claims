import React from 'react';
import Button from 'react-bootstrap/Button';
import Footer from '../../components/footer';
import ClaimsForm from '../../components/form';
import Header from '../../components/header';
// import './createClaim.css';

const CreateClaim = () => {
	return (
		<>
			<Header />
			<Button className='mb-2' href='/' size='lg' variant='outline-success'>
				Show claim list
			</Button>
			<h1>Create Claim</h1>
			<section className='ClaimsForm'>
				<ClaimsForm />
			</section>
			{/* <Footer /> */}
		</>
	);
};

export default CreateClaim;
