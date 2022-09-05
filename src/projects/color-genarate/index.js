import { useState } from 'react';
import classNames from 'classnames/bind';

import ColorS from './Color';
import styles from './color.module.scss';
import Values from 'values.js';

const cx = classNames.bind(styles);
function Color() {
    const [color, setColor] = useState('');
    const [error, setError] = useState(false);
    const [lstColor, setLstColor] = useState(new Values('#C2CDFF').all(10));

    const handleColor = () => {
        try {
            const arrColor = new Values(color).all(10);
            setLstColor(arrColor);
            setError(false);
        } catch (error) {
            setError(true);
        }
    };

    return (
        <>
            <div className={cx('wrapper')}>
                <span className={cx('main-title')}>Color Generator</span>
                <input
                    className={cx('txt-color', error && 'error')}
                    placeholder="#C2CDFF"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                ></input>
                <button className={cx('action')} onClick={handleColor}>
                    Submit
                </button>
            </div>
            <div className={cx('content')}>
                {lstColor.map((color, index) => (
                    <ColorS key={index} color={color} index={index} />
                ))}
            </div>
        </>
    );
}

export default Color;
