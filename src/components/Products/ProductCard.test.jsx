import { render, screen } from '@testing-library/react';
import ProductCard from '../ProductCard';

describe('ProductCard', () => {
    test('renders product name', () => {
        render(<ProductCard name="Test Product" />);
        const productName = screen.getByText(/Test Product/i);
        expect(productName).toBeInTheDocument();
    });

    test('renders product price', () => {
        render(<ProductCard price={29.99} />);
        const productPrice = screen.getByText(/\$29.99/i);
        expect(productPrice).toBeInTheDocument();
    });

    test('renders product image', () => {
        render(<ProductCard imageUrl="test-image.jpg" />);
        const productImage = screen.getByAltText(/product image/i);
        expect(productImage).toHaveAttribute('src', 'test-image.jpg');
    });
});