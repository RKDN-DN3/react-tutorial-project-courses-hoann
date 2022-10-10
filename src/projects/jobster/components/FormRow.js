import classnames from 'classnames/bind';

import styles from '../pages/pages.module.scss';

const cx = classnames.bind(styles);
function FormRow({ type, name, value, handleChange, labelText }) {
    return (
        <div className={cx('form-row')}>
            <label htmlFor="name" className={cx('form-label')}>
                {labelText || name}
            </label>
            <input
                id={name}
                type={type}
                name={name}
                value={value}
                className={cx('form-input')}
                onChange={handleChange}
            />
        </div>
    );
}

export default FormRow;
