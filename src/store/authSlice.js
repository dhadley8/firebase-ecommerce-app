import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signIn, signOut, register } from '../firebase/auth';

export const loginUser = createAsyncThunk('auth/loginUser', async (userData) => {
    const user = await signIn(userData);
    return user;
});

export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
    await signOut();
});

export const registerUser = createAsyncThunk('auth/registerUser', async (userData) => {
    const user = await register(userData);
    return user;
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        loading: false,
        error: null,
    },
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null;
            })
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { clearError } = authSlice.actions;

export default authSlice.reducer;