import { useEffect, useState } from 'react';
import classnames from 'classnames/bind';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './pages.module.scss';
import logo from '../assets/logo.svg';
import FormRow from '../components/FormRow';
import { registerUser, loginUser } from '../features/user/userSlice';

const cx = classnames.bind(styles);

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
};

function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [values, setValues] = useState(initialState);

    const { user, isLoading } = useSelector((store) => store.user);
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValues({ ...values, [name]: value });
    };
    const toggleMember = () => {
        setValues((pre) => ({ ...pre, isMember: !pre.isMember }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!values.email || !values.password || (!values.isMember && !values.name)) {
            toast.error('Please fill out all fields');
            return;
        }
        if (!values.isMember) {
            dispatch(registerUser({ email: values.email, password: values.password, name: values.name }));
        } else {
            dispatch(loginUser({ email: values.email, password: values.password }));
        }
    };

    useEffect(() => {
        if (user) {
            setTimeout(() => {
                navigate('/jobster/dashboard');
            }, 2000);
        }
    }, [user]);
    return (
        <div className={cx('full-page')}>
            <form className={cx('form')}>
                <img src={logo} alt="jobster logo" className={cx('logo-register')} />
                <h3>{values.isMember ? 'Login' : 'Register'}</h3>
                {!values.isMember && (
                    <FormRow type="text" name="name" value={values.name} handleChange={handleChange} />
                )}
                <FormRow type="email" name="email" value={values.email} handleChange={handleChange} />
                <FormRow type="password" name="password" value={values.password} handleChange={handleChange} />
                <button type="submit" className={cx('btn', 'btn-register')} disabled={isLoading} onClick={onSubmit}>
                    {isLoading ? 'loading...' : 'submit'}
                </button>
                <button
                    type="button"
                    className={cx('btn', 'btn-register', 'btn-hipster')}
                    disabled={isLoading}
                    // onClick={() => dispatch(loginUser({ email: 'testUser@test.com', password: 'secret' }))}
                >
                    {isLoading ? 'loading...' : 'demo app'}
                </button>
                <p>
                    {values.isMember ? 'Not a member yet?' : 'Already a member?'}
                    <button type="button" onClick={toggleMember} className={cx('member-btn')}>
                        {values.isMember ? 'Register' : 'Login'}
                    </button>
                </p>
            </form>
        </div>
    );
}

export default Register;
