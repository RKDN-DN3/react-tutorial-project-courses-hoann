import classNames from 'classnames/bind';

import styles from './reviews.module.scss';
import unnamed from '../../assets/images/unnamed.png';
import { FaQuoteRight, FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);
function Reviews() {
    const [id, setId] = useState(0);
    const [lstUser, setLstUser] = useState([]);
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('https://jsonplaceholder.typicode.com/users');
            const json = await data.json();
            setLstUser(json);
            setUser(lstUser[0]);
        };
        fetchData();
    }, []);
    return (
        <div className={cx('wrapper')}>
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
                <span className={cx('name')}>{user?.name}</span>
                <span className={cx('work')}>{user?.company?.name}</span>
                <span className={cx('intro')}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum ex ligula, et mollis justo
                    aliquam vitae. Duis aliquam dolor leo, quis lacinia purus sagittis sed
                </span>
                <div className={cx('action')}>
                    <FaAngleLeft className={cx('left')} color="#49a6e9" size={'2em'}></FaAngleLeft>
                    <FaAngleRight className={cx('right')} color="#49a6e9" size={'2em'}></FaAngleRight>
                </div>
                <div>
                    <button className={cx('random')}>Surprise Me</button>
                </div>
            </section>
        </div>
    );
}

export default Reviews;
