import { useEffect, useState } from 'react';
import classnames from 'classnames/bind';

import styles from './pagination.module.scss';
import { useFetch } from './useFetch';
import Follower from './Follower';

const cx = classnames.bind(styles);

function Pagination() {
    const { loading, data } = useFetch();
    const [page, setPage] = useState(0);
    const [followers, setFollowers] = useState([]);

    useEffect(() => {
        if (loading) return;
        setFollowers(data[page]);
    }, [page, loading]);

    const nextPage = () => {
        setPage((pre) => {
            let nextPage = pre + 1;
            if (nextPage > data.length - 1) {
                nextPage = 0;
            }
            return nextPage;
        });
    };

    const prePage = () => {
        setPage((pre) => {
            let prePage = pre - 1;
            if (prePage < 0) {
                prePage = data.length - 1;
            }
            return prePage;
        });
    };

    const handlePage = (index) => {
        setPage(index);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('section-title')}>
                <h1>{loading ? 'loading...' : 'pagination'}</h1>
                <div className={cx('underline')}></div>
            </div>
            <section className={cx('followers')}>
                <div className={cx('container')}>
                    {followers.map((follower) => {
                        return <Follower key={follower.id} {...follower} />;
                    })}
                </div>
                {!loading && (
                    <div className={cx('btn-container')}>
                        <button className={cx('prev-btn')} onClick={prePage}>
                            prev
                        </button>
                        {data.map((item, index) => (
                            <button
                                key={index}
                                className={cx('page-btn', index === page && 'active-btn')}
                                onClick={() => handlePage(index)}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <button className={cx('next-btn')} onClick={nextPage}>
                            next
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
}

export default Pagination;
