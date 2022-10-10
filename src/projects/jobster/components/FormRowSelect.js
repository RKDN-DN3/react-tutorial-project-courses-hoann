import classnames from 'classnames/bind';

import styles from '../pages/pages.module.scss';

const cx = classnames.bind(styles);
function FormRow({ list, name, value, handleChange, labelText }) {
    return (
        <div className={cx('form-row')}>
            <label htmlFor="name" className={cx('form-label')}>
                {labelText || name}
            </label>
            <select name={name} id={name} value={value} onChange={handleChange} className={cx('form-select')}>
                {list.map((itemValue, index) => {
                    return (
                        <option key={index} value={itemValue}>
                            {itemValue}
                        </option>
                    );
                })}
            </select>
        </div>
    );
}

export default FormRow;
