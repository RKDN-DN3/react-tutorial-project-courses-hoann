import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import customRequest from '../../utils/request';
import { getAllJobs } from '../../features/allJobs/allJobsSlice';

const initialState = {
    isLoading: false,
    position: '',
    company: '',
    jobLocation: '',
    statusOptions: ['interview', 'declined', 'pending'],
    jobType: 'full-time',
    jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
    status: 'pending',
    isEditing: false,
    editJobId: '',
};

export const addJob = createAsyncThunk('job/addJob', async (job, thunkAPI) => {
    try {
        const res = await customRequest.post('/jobs', job, {
            headers: {
                authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
            },
        });
        thunkAPI.dispatch(clearValues());
        return res.data;
    } catch (error) {}
});

export const deleteJob = createAsyncThunk('job/deleteJob', async (job, thunkAPI) => {
    try {
        const res = await customRequest.delete(`/jobs/${job}`, {
            headers: {
                authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
            },
        });
        thunkAPI.dispatch(getAllJobs());
        return res.data;
    } catch (error) {}
});

export const editJob = createAsyncThunk('job/editJob', async ({ jobId, job }, thunkAPI) => {
    try {
        const res = await customRequest.patch(`/jobs/${jobId}`, job, {
            headers: {
                authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
            },
        });
        thunkAPI.dispatch(clearValues());
        return res.data;
    } catch (error) {}
});

const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        handleChange: (state, { payload }) => {
            state[payload.name] = payload.value;
        },
        clearValues: () => {
            return { ...initialState };
        },
        setEditJob: (state, { payload }) => {
            return { ...state, isEditing: true, ...payload };
        },
    },
    extraReducers: {
        [addJob.pending]: (state) => {
            state.isLoading = true;
        },
        [addJob.fulfilled]: (state) => {
            state.isLoading = false;
            toast.success('Job Created');
        },
        [addJob.rejected]: (state, { payload }) => {
            state.isLoading = true;
            toast.error(payload);
        },
        [deleteJob.pending]: (state) => {
            state.isLoading = true;
        },
        [deleteJob.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            toast.success('Job Delete');
        },
        [deleteJob.rejected]: (state, { payload }) => {
            state.isLoading = true;
            toast.error(payload);
        },
        [editJob.pending]: (state) => {
            state.isLoading = true;
        },
        [editJob.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            toast.success('Job Edit');
        },
        [editJob.rejected]: (state, { payload }) => {
            state.isLoading = true;
            toast.error(payload);
        },
    },
});

export const { clearValues, handleChange, setEditJob } = jobSlice.actions;

export default jobSlice.reducer;
