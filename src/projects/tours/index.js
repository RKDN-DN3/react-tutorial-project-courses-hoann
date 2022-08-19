import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './tours.module.scss';
import Item from './Item';

const cx = classNames.bind(styles);

function Tours() {
    const [item, setItem] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((res) => res.json())
            .then((res) => {
                setItem(res.slice(0, 10));
            });
    }, []);
    return (
        <div className={cx('wrapper')}>
            <span className={cx('main-title')}>Our Tours</span>
            {item.map((p) => (
                <Item key={p.id} data={p}></Item>
            ))}
        </div>
    );
}

export default Tours;
