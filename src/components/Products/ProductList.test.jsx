import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProductList from './ProductList';

describe('ProductList', () => {
    it('renders without crashing', () => {
        render(<ProductList />);
        expect(screen.getByText(/product list/i)).toBeInTheDocument();
    });
});