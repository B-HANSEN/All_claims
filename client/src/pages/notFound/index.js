import React from 'react';
import Button from 'react-bootstrap/Button';

const NotFound = () => {
	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			Not found
			<Button className='mb-2' href='/' size='lg' variant='outline-success'>
				Return to claim list
			</Button>
		</div>
	);
};

export default NotFound;

// TODO: check if Bootstrap provides a standard 404 layout
