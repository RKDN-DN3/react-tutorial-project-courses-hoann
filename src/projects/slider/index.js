import { useState } from 'react';
import classNames from 'classnames/bind';
import { FaAngleLeft, FaAngleRight, FaQuoteRight } from 'react-icons/fa';

import styles from './slider.module.scss';
import { SLIDER } from '../../data';

const cx = classNames.bind(styles);
function Slider() {
    const [index, setIndex] = useState(0);

    return (
        <div className={cx('wrapper')}>
            <p className={cx('main-title')}>
                <span className={cx('main-title')} style={{ color: '#ba5d2c' }}>
                    /{' '}
                </span>
                Reviews
            </p>
            <div className={cx('center')}>
                <button className={cx('btn', 'previous')} onClick={() => setIndex(index - 1)}>
                    <FaAngleLeft size={20} />
                </button>
                {SLIDER.map((content, personIndex) => {
                    let position = 'nextSlide';
                    if (index === personIndex) {
                        position = 'activeSlide';
                    }

                    if (personIndex === index - 1 || (index === 0 && personIndex === SLIDER.length - 1)) {
                        position = 'lastSlide';
                    }
                    return (
                        <div key={content.id} className={cx('content', position)}>
                            <img className={cx('avatar')} src={content.image} alt={content.name}></img>
                            <span className={cx('name')}>{content.name.toUpperCase()}</span>
                            <span className={cx('title')}>{content.title}</span>
                            <p className={cx('quote')}>{content.quote}</p>
                            <FaQuoteRight size={40} color="#ba5d2c" />
                        </div>
                    );
                })}
                <button className={cx('btn', 'next')} onClick={() => setIndex(index + 1)}>
                    <FaAngleRight size={20} />
                </button>
            </div>
        </div>
    );
}

export default Slider;
