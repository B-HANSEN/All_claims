import React, { useState } from 'react';
import { Formik } from 'formik';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import { addMonths } from '../../utility/helper';
import './form.css';
const yup = require('yup');
// import claimPayloadSchema from '../../utility/schemas';

const claimPayloadSchema = yup.object().shape({
	amount: yup.number(),
	// 	.typeError('invalid amount number format')
	// 	.required('amount required'),
});

const ClaimsForm = () => {
	const [policyNumber, setPolicyNumber] = useState('');
	const [holder, setHolder] = useState('');
	// const [insuredName, setInsuredName] = useState('');
	const [insuredItem, setInsuredItem] = useState('');
	const [amount, setAmount] = useState('');
	const [description, setDescription] = useState('');
	const [incidentDate, setIncidentDate] = useState(''); // TODO: update to data format
	const [processingFee, setProcessingFee] = useState('');
	const navigate = useNavigate();

	const handleSubmit = async e => {
		e.preventDefault();
		const newClaim = {
			policyNumber,
			holder,
			// insuredName,
			insuredItem,
			amount, //: Number(parseFloat(amount).toFixed(2)),
			description,
			incidentDate,
			processingFee, //: Number(parseFloat(processingFee).toFixed(2)),
		};
		const claimsUrl = 'http://localhost:8001/api/v1/claims';

		console.log('newClaim: ', newClaim);
		try {
			await fetch(claimsUrl, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(newClaim),
			}).then(response => {
				console.log('success writing to server', response);
				console.log('body', JSON.stringify(newClaim));
			});
		} catch (err) {
			throw err.message;
		} finally {
			navigate('/');
		}
	};

	return (
		// <Formik
		// 	validationSchema={claimPayloadSchema}
		// 	// validate={values => {
		// 	// 	const errors = {};
		// 	// 	if (!values.amount) {
		// 	// 		errors.amount = 'Required';
		// 	// 	}
		// 	// 	return errors;
		// 	// }}
		// 	onSubmit={console.log}
		// 	// onSubmit={handleSubmit}
		// 	initialValues={
		// 		{
		// 			// policyNumber: '',
		// 			// holder: '',
		// 			// insuredName: '',
		// 			// amount: '0',
		// 			// description: '',
		// 			// incidentDate: '',
		// 			// processingFee: 0,
		// 		}
		// 	}
		// >
		// 	{({
		// 		handleSubmit,
		// 		handleChange,
		// 		handleBlur,
		// 		values,
		// 		touched,
		// 		isValid,
		// 		errors,
		// 	}) => (
		<Form
			// noValidate
			onSubmit={handleSubmit}
		>
			<Form.Group as={Row} className='mb-3' controlId='ControlInput'>
				<Form.Label column sm='4'>
					Policy number:
				</Form.Label>
				<Col sm='6'>
					<Form.Control
						placeholder=''
						value={policyNumber}
						size='lg'
						type='string'
						required
						// isValid={touched.policyNumber && !errors.policyNumber}
						onChange={e => setPolicyNumber(e.target.value)}
					/>
				</Col>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>
			<Form.Group as={Row} className='mb-3' controlId='ControlInput'>
				<Form.Label column sm='4'>
					Holder name:
				</Form.Label>
				<Col sm='6'>
					<Form.Control
						placeholder=''
						value={holder}
						size='lg'
						type='string'
						required
						// isValid={touched.holder && !errors.holder}
						onChange={e => setHolder(e.target.value)}
					/>
				</Col>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>
			<Form.Group as={Row} className='mb-3' controlId='ControlInput'>
				<Form.Label column sm='4'>
					Insured item:
				</Form.Label>
				<Col sm='6'>
					<Form.Control
						placeholder=''
						value={insuredItem}
						size='lg'
						type='string'
						required
						// isValid={touched.insuredName && !errors.insuredName}
						onChange={e => setInsuredItem(e.target.value)}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className='mb-3' controlId='ControlInput'>
				<Form.Label column sm='4'>
					Claim amount:
				</Form.Label>
				<Col sm='6'>
					<Form.Control
						placeholder=''
						value={amount}
						size='lg'
						type='number'
						required
						// isValid={touched.amount && !errors.amount}
						// isInvalid={!!errors.amount}
						onChange={e => setAmount(e.target.value)}
						// onChange={handleChange}
					/>
				</Col>
				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
				{/* <Form.Control.Feedback type='invalid'>
					{errors.amount}
					Please provide a valid amount.
				</Form.Control.Feedback> */}
			</Form.Group>
			<Form.Group as={Row} className='mb-3' controlId='ControlInput'>
				<Form.Label column sm='4'>
					Description:
				</Form.Label>
				<Col sm='6'>
					<Form.Control
						placeholder=''
						value={description}
						size='lg'
						type='string'
						required
						// isValid={touched.description && !errors.description}
						onChange={e => setDescription(e.target.value)}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className='mb-3' controlId='ControlInput'>
				<Form.Label column sm='4'>
					Incident Date:
				</Form.Label>
				<Col sm='6'>
					<Form.Control
						placeholder=''
						value={incidentDate}
						size='lg'
						type='string'
						// type='date'
						required
						// isValid={touched.incidentDate && !errors.incidentDate}
						onChange={e => setIncidentDate(e.target.value)}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className='mb-3' controlId='ControlInput'>
				<Form.Label column sm='4'>
					Processing Fee:
				</Form.Label>
				<Col sm='6'>
					<Form.Control
						placeholder=''
						value={processingFee}
						size='lg'
						type='string'
						required
						// isValid={touched.processingFee && !errors.processingFee}
						onChange={e => setProcessingFee(e.target.value)}
					/>
				</Col>
			</Form.Group>
			<Button
				className='mb-2'
				size='lg'
				type='submit'
				variant='success'
				value='Submit'
			>
				Add new claim
			</Button>
		</Form>
		// )}
		// </Formik>
	);
};

export default ClaimsForm;

// - Policy number
// - Holder name
// - Insured item
// - Claim amount: string, 2 decimal point. e.g: "15.50"
// - Description
// - Incident date
// - Processing fee: string, 2 decimal point. e.g: "15.50"

{
	/* <select value={value} onChange={e => setSomeValue(e.target.value)}>
<option value='tbn1'>tbn1</option>
<option value='tbn2'>tbn2</option>
</select> */
	// const handleSubmit = e => {
	// 	e.preventDefault();
	// 	const newClaim = {
	// 		policyNumber,
	// 		holder,
	// 		insuredItem,
	// 		claimAmount,
	// 		description,
	// 		incidentDate,
	// 		processingFee,
	// 	};
	// 	console.log('new claim: ', newClaim);
	// 	const claimsUrl = 'http://localhost:8001/api/v1/claims';
	// 	fetch(claimsUrl, {
	// 		method: 'POST',
	// 		headers: { 'Content-Type': 'application/json' },
	// 		body: JSON.stringify(newClaim),
	// 	})
	// 		.then(response => {
	// 			console.log('success writing to server', response);
	// 		})
	// 		.catch(err => {
	// 			console.log('error writing to server', err);
	// 		})
	// 		.then(() => navigate('/'));
	// };
}

{
	/* TODO: include validation rules >> import 'claimPayloadSchema' */
}
{
	/* <form onSubmit={handleSubmit}>
				<section>
					<label>Policy number:</label>
					<input
						type='text'
						required
						value={policyNumber}
						onChange={e => setPolicyNumber(e.target.value)}
					/>
					<label>Holder name:</label>
					<input
						type='text'
						required
						value={holder}
						onChange={e => setHolder(e.target.value)}
					/>
				</section>

				<section>
					<label>Insured item:</label>
					<input
						type='text'
						required
						value={insuredName}
						onChange={e => setInsuredName(e.target.value)}
					/>
					<label>Claim amount:</label>
					<input
						type='text'
						required
						value={amount}
						onChange={e => setAmount(e.target.value)}
					/>
				</section>

				<section>
					<label>Description:</label>
					<input
						type='text'
						required
						value={description}
						onChange={e => setDescription(e.target.value)}
					/>
					<label>Incident Date:</label>
					<input
						type='text'
						required
						value={incidentDate}
						onChange={e => setIncidentDate(e.target.value)}
					/>
				</section>

				<section>
					<label>Processing Fee:</label>
					<input
						type='text'
						required
						value={processingFee}
						onChange={e => setProcessingFee(e.target.value)}
					/>
				</section>

				<button>Add Claim</button>
			</form> */
}
