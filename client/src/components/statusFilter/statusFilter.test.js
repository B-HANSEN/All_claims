import { render, screen, fireEvent } from '@testing-library/react';
import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import StatusFilter from '.';

const shallowRender = Component =>
	new ShallowRenderer(Component).getRenderOutput();

describe('Status filter tests', () => {
	it('should match snapshot', () => {
		expect(shallowRender(<StatusFilter />)).toMatchSnapshot();
	});

	it('should update local state with new filter value', () => {
		const handleFilter = jest.fn();

		render(<StatusFilter filter={'ShowAll'} setFilter={handleFilter} />);
		expect(screen.getByText('Processed')).toBeInTheDocument();

		fireEvent.change(screen.getByTestId('select'), {
			target: { value: 'Approved' },
		});
		expect(handleFilter).toHaveBeenCalledTimes(1);
	});
});
