import React, { useState } from 'react';

const Select = (val, update) => {
	console.log('Select, val: ', val);
	const [filter, setFilter] = useState('');
	console.log('Select, filter: ', val);

	return (
		<>
			<select
				id='status'
				value={val}
				onChange={e => {
					setFilter(e.target.value);
					update(e.target.value);
					console.log('target.value: ', e.target.value);
				}}
				className=''
			>
				<option value='Submitted'>Submitted</option>
				<option value='Approved'>Approved</option>
				<option value='Processed'>Processed</option>
				<option value='Completed'>Completed</option>
				<option value='Rejected'>Rejected</option>
			</select>
		</>
	);
};

export default Select;
