import React, { useState } from 'react';

const Search = ({ value, setValue }) => {
	console.log('CHILD props, value: ', value);
	const [query, setQuery] = useState('');
	const [submitted, setSubmitted] = useState(false);
	console.log('CHILD local state: ', query);

	const handleSubmit = e => {
		e.preventDefault();
		setSubmitted(true);
		setValue(query);
	};

	const handleChange = e => {
		setSubmitted(false);
		setQuery(e.target.value);
	};
	/* search parameters claim id, holder name policy number */
	return (
		<>
			<form onSubmit={e => handleSubmit(e)}>
				<label htmlFor='search'>Search here</label>
				<input
					onFocus={() => setQuery('')}
					type='text'
					id='search'
					name='search'
					value={query}
					placeholder='Enter query here...'
					onChange={e => handleChange(e)}
				/>
				<button type='submit' onClick={handleSubmit}>
					Submit
				</button>
			</form>
		</>
	);
};

export default Search;
