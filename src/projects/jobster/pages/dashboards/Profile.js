import { useState } from 'react';
import classnames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';

import styles from './dashboard.module.scss';
import FormRow from '../../components/FormRow';
import { updateUser } from '../../features/user/userSlice';

const cx = classnames.bind(styles);

function Profile() {
    const { user, isLoading } = useSelector((state) => state.user);
    const [values, setValues] = useState({
        name: user?.name || '',
        email: user?.email || '',
        lastName: user?.lastName || '',
        location: user?.location || '',
    });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValues({ ...values, [name]: value });
    };
    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(
            updateUser({
                email: values.email,
                name: values.name,
                lastName: values.lastName,
                location: values.location,
            }),
        );
    };

    return (
        <div className={cx('profile')}>
            <form className={cx('form')}>
                <h3>profile</h3>
                <div className={cx('form-center')}>
                    <FormRow type="text" name="name" value={values.name} handleChange={handleChange} />
                    <FormRow
                        type="text"
                        labelText="last name"
                        name="lastName"
                        value={values.lastName}
                        handleChange={handleChange}
                    />
                    <FormRow type="email" name="email" value={values.email} handleChange={handleChange} />
                    <FormRow type="text" name="location" value={values.location} handleChange={handleChange} />
                    <button
                        type="submit"
                        className={cx('btn', 'btn-block')}
                        disabled={isLoading}
                        onClick={handleUpdate}
                    >
                        {isLoading ? 'Please Wait...' : 'save changes'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Profile;
