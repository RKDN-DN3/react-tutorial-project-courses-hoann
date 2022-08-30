import classNames from 'classnames/bind';
import ReactLoading from 'react-loading';

import styles from './reviews.module.scss';
import unnamed from '../../assets/images/unnamed.png';
import { FaQuoteRight, FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);
function Reviews() {
    const [id, setId] = useState(0);
    const [lstUser, setLstUser] = useState([]);
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
            })
            .then((users) => {
                setLstUser(users.slice(0, 10));
                setUser(users[id]);
                setIsLoading(false);
            });
    }, []);

    const handleNextPrevious = (isNext = false) => {
        if (isNext) {
            if (id === lstUser.length - 1) {
                setUser(lstUser[0]);
                setId(0);
            } else {
                setUser(lstUser[id + 1]);
                setId((pre) => {
                    return pre + 1;
                });
            }
        } else {
            if (id === 0) {
                setUser(lstUser[lstUser.length - 1]);
                setId(lstUser.length - 1);
            } else {
                setUser(lstUser[id - 1]);
                setId((pre) => {
                    return pre - 1;
                });
            }
        }
    };
    return (
        <div className={cx('wrapper')}>
            {isLoading ? (
                <ReactLoading type="spinningBubbles" color="#49a6e9" />
            ) : (
                <>
                    <span className={cx('main-title')}>Our Reviews</span>
                    <div className={cx('underline')}></div>

                    <section className={cx('content')}>
                        <div className={cx('avatar')}>
                            <img className={cx('image')} alt="" src={unnamed}></img>
                            <div className={cx('round')}></div>
                            <div className={cx('quote')}>
                                <FaQuoteRight className={cx('')} color="white"></FaQuoteRight>
                            </div>
                        </div>
                        <span className={cx('name')}>{user.email}</span>
                        <span className={cx('work')}>{user.name}</span>
                        <span className={cx('intro')}>{user.body}</span>

                        <div className={cx('action')}>
                            <FaAngleLeft
                                className={cx('left')}
                                color="#49a6e9"
                                size={'2em'}
                                onClick={() => handleNextPrevious()}
                            ></FaAngleLeft>
                            <FaAngleRight
                                className={cx('right')}
                                color="#49a6e9"
                                size={'2em'}
                                onClick={() => handleNextPrevious(true)}
                            ></FaAngleRight>
                        </div>
                        <div>
                            <button
                                className={cx('random')}
                                onClick={() => {
                                    let index = Math.floor(Math.random() * lstUser.length);
                                    setUser(lstUser[index]);
                                    setId(index);
                                }}
                            >
                                Surprise Me
                            </button>
                        </div>
                    </section>
                </>
            )}
        </div>
    );
}

export default Reviews;
