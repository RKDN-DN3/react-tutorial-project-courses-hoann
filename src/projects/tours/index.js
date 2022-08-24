import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './tours.module.scss';
import Item from './Item';

const cx = classNames.bind(styles);

function Tours() {
    const [item, setItem] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        await fetch('https://course-api.com/react-tours-project')
            .then((res) => res.json())
            .then((res) => {
                setItem(res);
                setIsLoading(false);
            });
    };

    const handleRemoveTour = (id) => {
        const tours = [...item];
        const filterTours = tours.filter((tour) => tour.id !== id);
        setItem(filterTours);
    };
    return (
        <div className={cx('wrapper')}>
            {isLoading ? (
                <span className={cx('main-title')}>Loading...</span>
            ) : (
                <span className={cx('main-title')}>{item.length > 0 ? 'Our Tours' : 'No Tours Left'}</span>
            )}
            <div className={cx('underline')}></div>
            {item.map((p) => (
                <Item key={p.id} data={p} handleRemoveTour={handleRemoveTour}></Item>
            ))}
            {item.length === 0 && !isLoading && (
                <button className={cx('refresh-btn')} onClick={fetchData}>
                    Refresh
                </button>
            )}
        </div>
    );
}

export default Tours;
