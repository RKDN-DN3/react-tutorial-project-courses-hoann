import { useState } from 'react';
import classnames from 'classnames/bind';

import styles from './pages.module.scss';
import logo from '../assets/logo.svg';
import FormRow from '../components/FormRow';

const cx = classnames.bind(styles);

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
};

function Register() {
    const [values, setValues] = useState(initialState);
    const [isLoading, setIsLoading] = useState(false);

    const toggleMember = () => {
        setValues((pre) => ({ ...pre, isMember: !pre.isMember }));
    };
    return (
        <div className={cx('full-page')}>
            <form className={cx('form')}>
                <img src={logo} alt="jobster logo" className={cx('logo-register')} />
                <h3>{values.isMember ? 'Login' : 'Register'}</h3>
                {!values.isMember && <FormRow type="text" name="name" value={values.name} />}
                <FormRow type="email" name="email" value={values.email} />
                <FormRow type="password" name="password" value={values.password} />
                <button type="submit" className={cx('btn', 'btn-register')} disabled={isLoading}>
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
