import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isShow: false,
};

const slice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        showModal: (state) => {
            state.isShow = true;
        },
        hideModal: (state) => {
            state.isShow = false;
        },
    },
});

export const { showModal, hideModal } = slice.actions;

export default slice.reducer;
