import React, { useState } from 'react';

const Search = () => {
	const [value, setValue] = useState('hello');

	return (
		<>
			<form action='/action_page.php'>
				<label htmlFor='search'>Search here</label>
				<input
					type='text'
					id='search'
					name='search'
					value={value}
					placeholder='Enter some text'
					onChange={e => setValue(e.target.value)}
				/>
			</form>
		</>
	);
};

export default Search;

{
	/* search parameters
			- `claim id`; or
			- `holder name`; or
			- `policy number ` */
}
