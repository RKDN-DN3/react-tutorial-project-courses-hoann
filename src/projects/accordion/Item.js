import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './accordion.module.scss';

const cx = classNames.bind(styles);
function Item({ data }) {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow((pre) => !pre);
    };
    return (
        <div className={cx('question')}>
            <div className={cx('header')}>
                <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>{data.name}</span>
                <div className={cx('action')} onClick={() => handleShow()}>
                    {show ? '-' : '+'}
                </div>
            </div>
            {show ? <div>{data.body}</div> : null}
        </div>
    );
}

export default Item;
