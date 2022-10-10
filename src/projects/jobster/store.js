import { configureStore } from '@reduxjs/toolkit';
import useReducer from './features/user/userSlice';
import jobReducer from './features/job/jobSlice';
import allJobReducer from './features/allJobs/allJobsSlice';

export const store = configureStore({
    reducer: { user: useReducer, job: jobReducer, allJobs: allJobReducer },
});
