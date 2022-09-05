import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './lorem.module.scss';
import { LOREM } from '../../data';

const cx = classNames.bind(styles);
function Lorem() {
    const [value, setValue] = useState(0);
    const [data, setData] = useState([]);

    const handleGanerate = () => {
        if (value <= 0) {
            setData(LOREM.slice(0, 1));
        } else if (value > 9) {
            setData(LOREM.slice(0, LOREM.length));
        } else {
            setData(LOREM.slice(0, value));
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div style={{ width: '95vw', margin: '5rem auto', display: 'contents' }}>
                <span className={cx('main-title')}>TIRED OF BORING LOREM IPSUM?</span>
                <div className={cx('header')}>
                    <span className={cx('title')}>Paragraphs:</span>
                    <input
                        className={cx('number')}
                        type="number"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <button className={cx('action')} onClick={handleGanerate}>
                        GENERATE
                    </button>
                </div>
                <div className={cx('content')}>
                    {data.map((param, index) => (
                        <p style={{ color: '#617d98', maxWidth: '640px', lineHeight: 1.5 }} key={index}>
                            {param}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Lorem;
