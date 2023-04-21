import React from 'react';

const StatusFilter = ({ filter, setFilter }) => {
	return (
		<select
			id='status'
			value={filter}
			onChange={e => setFilter(e.target.value)}
			className=''
		>
			<option value='ShowAll'>Show All</option>
			<option value='Submitted'>Submitted</option>
			<option value='Approved'>Approved</option>
			<option value='Processed'>Processed</option>
			<option value='Completed'>Completed</option>
			<option value='Rejected'>Rejected</option>
		</select>
	);
};

export default StatusFilter;
