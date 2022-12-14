import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const cartItems = [
    {
        id: 'rec1JZlfCIBOPdcT2',
        title: 'Samsung Galaxy S8',
        price: '399.99',
        img: 'https://dl.airtable.com/.attachments/64b266ad865098befbda3c3577a773c9/24497852/yedjpkwxljtb75t3tezl.png',
        amount: 1,
    },
    {
        id: 'recB6qcHPxb62YJ75',
        title: 'google pixel',
        price: '499.99',
        img: 'https://dl.airtable.com/.attachments/91c88ae8c1580e2b762ecb3f73ed1eed/a633139a/phone-1_gvesln.png',
        amount: 1,
    },
    {
        id: 'recdRxBsE14Rr2VuJ',
        title: 'Xiaomi Redmi Note 2',
        price: '699.99',
        img: 'https://dl.airtable.com/.attachments/bae9208dc34f35128749ecda5b999e84/337c285d/phone-3_h2s6fo.png',
        amount: 1,
    },
    {
        id: 'recwTo160XST3PIoW',
        title: 'Samsung Galaxy S7',
        price: '599.99 ',
        img: 'https://dl.airtable.com/.attachments/91ee456448cef47deec553a2ea3fa8ad/b08bec68/phone-2_ohtt5s.png',
        amount: 1,
    },
];
const initialState = {
    cartItems: [],
    total: 0,
    amount: 0,
    isLoading: false,
};

const url = 'https://course-api.com/react-useReducer-cart-project';

export const fetchData = createAsyncThunk('fetchData', async (name, thunk) => {
    try {
        const res = await axios(url);
        return res.data;
    } catch (error) {
        thunk.rejectWithValue('ERROR');
    }
});

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        removeAll: (state) => {
            state.cartItems = [];
        },
        remove: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
        },
        increase: (state, { payload }) => {
            const item = state.cartItems.find((item) => item.id === payload.id);
            item.amount = item.amount + 1;
        },
        decrease: (state, { payload }) => {
            const item = state.cartItems.find((item) => item.id === payload.id);
            item.amount = item.amount - 1;
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        },
    },
    extraReducers: {
        [fetchData.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchData.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.cartItems = action.payload;
        },
        [fetchData.rejected]: (state, action) => {
            console.log(action);
            state.isLoading = false;
        },
    },
});

export const { removeAll, remove, increase, decrease, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;
