import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
	const [title, setTitle] = useState('');
	const [value, setValue] = useState('');
	const [someValue, setSomeValue] = useState('');
	const navigate = useNavigate();

	const handleSubmit = e => {
		e.preventDefault();
		const blog = { title, someValue };

		fetch('http://localhost:8001/api/v1/claims', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(blog),
		}).then(() => navigate('/'));
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label>Title tbn:</label>
				<input
					type='text'
					required
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
				<label>Label tbn:</label>
				<select value={value} onChange={e => setSomeValue(e.target.value)}>
					<option value='tbn1'>tbn1</option>
					<option value='tbn2'>tbn2</option>
				</select>
				<button>Add Claim</button>
			</form>
		</>
	);
};

export default Form;
