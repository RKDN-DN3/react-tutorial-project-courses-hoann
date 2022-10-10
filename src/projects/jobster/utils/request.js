import axios from 'axios';

const customRequest = axios.create({
    baseURL: 'https://jobify-prod.herokuapp.com/api/v1/toolkit',
});

export default customRequest;
