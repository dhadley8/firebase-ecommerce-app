import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts } from '../firebase/firestore';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const products = await getProducts();
    return products;
});

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        clearProducts: (state) => {
            state.items = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { clearProducts } = productsSlice.actions;

export default productsSlice.reducer;