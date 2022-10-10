import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import request from '../../utils/request';

const addUserToLocalStorage = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
};

const removeUserFromLocalStorage = () => {
    localStorage.removeItem('user');
};

const getUserFromLocalStorage = () => {
    const result = localStorage.getItem('user');
    const user = result ? JSON.parse(result) : null;
    return user;
};

const initialState = {
    isLoading: false,
    isSidebarOpen: false,
    user: getUserFromLocalStorage(),
};

export const registerUser = createAsyncThunk('user/registerUser', async (user, thunkAPI) => {
    try {
        const res = await request.post('/auth/register', user);
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
});

export const loginUser = createAsyncThunk('user/loginUser', async (user, thunkAPI) => {
    try {
        const res = await request.post('/auth/login', user);
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
});

export const updateUser = createAsyncThunk('user/updateUser', async (user, thunkAPI) => {
    try {
        console.log(thunkAPI.getState());
        const res = await request.patch('/auth/updateUser', user, {
            headers: {
                authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
            },
        });
        return res.data;
    } catch (error) {
        if (error.response.status === 401) {
            removeUserFromLocalStorage();
            return thunkAPI.rejectWithValue('Unauthorized! Logging Out...');
        }
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            console.log(state.isSidebarOpen);
            state.isSidebarOpen = !state.isSidebarOpen;
        },
        logoutUser: (state, { payload }) => {
            state.user = null;
            state.isSidebarOpen = false;
            removeUserFromLocalStorage();
            if (payload) {
                toast.success(payload);
            }
        },
    },
    extraReducers: {
        [loginUser.pending]: (state) => {
            state.isLoading = true;
        },
        [loginUser.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.user = payload.user;
            addUserToLocalStorage(payload.user);
            toast.success(`Welcome Back ${payload.user.name}`);
        },
        [loginUser.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        },
        [registerUser.pending]: (state) => {
            state.isLoading = true;
        },
        [registerUser.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.user = payload.user;
            addUserToLocalStorage(payload.user);
            toast.success(`Hello There ${payload.user.name}`);
        },
        [registerUser.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        },
        [updateUser.pending]: (state) => {
            state.isLoading = true;
        },
        [updateUser.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.user = payload.user;
            addUserToLocalStorage(payload.user);

            toast.success(`User Updated!`);
        },
        [updateUser.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        },
    },
});

export const { toggleSidebar, logoutUser } = userSlice.actions;
export default userSlice.reducer;
