import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './color.module.scss';

const cx = classNames.bind(styles);
function Color({ color, index }) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const id = setTimeout(() => {
            setShow(false);
        }, 3000);
        return () => clearTimeout(id);
    }, [show]);

    return (
        <div
            className={cx('color', index > 10 && 'color-light')}
            style={{ backgroundColor: `rgb(${color.rgb})` }}
            onClick={() => {
                setShow(true);
                navigator.clipboard.writeText(`#${color.hex}`);
            }}
        >
            <span>{color.weight}%</span>
            <span>#{color.hex}</span>
            {show && <span> COPIED TO CLIPBOARD</span>}
        </div>
    );
}

export default Color;
