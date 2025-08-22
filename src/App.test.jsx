import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ecommerce/i);
    expect(titleElement).toBeInTheDocument();
});

test('renders product list', () => {
    render(<App />);
    const productListElement = screen.getByTestId('product-list');
    expect(productListElement).toBeInTheDocument();
});