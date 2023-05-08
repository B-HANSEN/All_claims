import { render, screen } from '@testing-library/react';
import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import NotFound from '.';

describe('Not Found Page tests', () => {
	it('should match snapshot', () => {
		const renderer = new ShallowRenderer();
		const result = renderer.render(<NotFound />);
		expect(result).toMatchSnapshot();
	});

	it('should contain 404 elements', async () => {
		render(<NotFound />);
		const status = screen.getByText(/404/i);
		const notFoundPage = screen.getByText(/page not found./i);
		const notExisting = screen.getByText(/the page/i);
		const goHome = screen.getByText(/go home/i);

		expect(status).toBeInTheDocument();
		expect(notFoundPage).toBeInTheDocument();
		expect(notExisting).toBeInTheDocument();
		expect(goHome).toBeInTheDocument();
	});
});
