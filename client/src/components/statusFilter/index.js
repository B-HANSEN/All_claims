import React from 'react';
import Form from 'react-bootstrap/Form';
import './statusFilter.css';

const StatusFilter = ({ filter, setFilter }) => {
	return (
		<Form.Select
			aria-label='Default select example'
			className='StatusFilter'
			id='status'
			onChange={e => setFilter(e.target.value)}
			size='lg'
			value={filter}
		>
			<option value='ShowAll'>Show All</option>
			<option value='Submitted'>Submitted</option>
			<option value='Approved'>Approved</option>
			<option value='Processed'>Processed</option>
			<option value='Completed'>Completed</option>
			<option value='Rejected'>Rejected</option>
		</Form.Select>
	);
};

export default StatusFilter;

// const StatusFilter = ({ filter, setFilter }) => {
// 	return (
// 		<select
// 			id='status'
// 			value={filter}
// 			onChange={e => setFilter(e.target.value)}
// 			className=''
// 		>
// 			<option value='ShowAll'>Show All</option>
// 			<option value='Submitted'>Submitted</option>
// 			<option value='Approved'>Approved</option>
// 			<option value='Processed'>Processed</option>
// 			<option value='Completed'>Completed</option>
// 			<option value='Rejected'>Rejected</option>
// 		</select>
// 	);
// };

// export default StatusFilter;
