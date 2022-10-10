import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import customRequest from '../../utils/request';

const initialFiltersState = {
    search: '',
    searchStatus: 'all',
    searchType: 'all',
    sort: 'latest',
    sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
};

const initialState = {
    isLoading: true,
    jobs: [],
    page: 1,
    totalJobs: 0,
    numOfPages: 1,
    ...initialFiltersState,
};

export const getAllJobs = createAsyncThunk('allJobs/getJobs', async (job, thunkAPI) => {
    try {
        const { search, searchStatus, searchType, sort, page } = thunkAPI.getState().allJobs;

        let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;
        if (search) {
            url = url + `&search=${search}`;
        }
        const res = await customRequest.get(url, {
            headers: {
                authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
            },
        });
        return res.data;
    } catch (error) {}
});

const allJobSlice = createSlice({
    name: 'allJobs',
    initialState,
    reducers: {
        handleChange: (state, { payload }) => {
            state.page = 1;
            state[payload.name] = payload.value;
        },
    },
    extraReducers: {
        [getAllJobs.pending]: (state) => {
            state.isLoading = true;
        },
        [getAllJobs.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.jobs = payload.jobs;
            state.totalJobs = payload.totalJobs;
            state.numOfPages = payload.numOfPages;
        },
        [getAllJobs.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        },
    },
});

export const { handleChange } = allJobSlice.actions;

export default allJobSlice.reducer;
