import { useEffect, useState } from 'react';
import classnames from 'classnames/bind';
import axios from 'axios';
import { FaEnvelopeOpen, FaUser, FaCalendarTimes, FaMap, FaPhone, FaLock } from 'react-icons/fa';

import styles from './random.module.scss';

const cx = classnames.bind(styles);
const url = 'https://randomuser.me/api/';
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg';

function Random() {
    const [loading, setLoading] = useState(true);
    const [person, setPerson] = useState(null);
    const [title, setTitle] = useState('name');
    const [value, setValue] = useState('');

    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await axios(url);
            const person = res.data.results[0];
            const { title, first, last } = person.name;
            const { age } = person.dob;
            const {
                street: { number, name },
            } = person.location;
            const { password } = person.login;
            const { large: image } = person.picture;

            const newPerson = {
                name: `${title} ${first} ${last}`,
                email: person.email,
                age,
                address: `${number} ${name}`,
                phone: person.phone,
                password,
                image,
            };
            setPerson(newPerson);
            setValue(newPerson.name);
            setTitle('name');
            setLoading(false);
        } catch (error) {}
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleValue = (e) => {
        if (e.target.classList.contains(cx('icon'))) {
            const newValue = e.target.dataset.label;
            setTitle(newValue);
            setValue(person[newValue]);
        }
    };

    return (
        <div>
            <div className={cx('block', 'bcg-black')}></div>
            <div className={cx('block')}>
                <div className={cx('container')}>
                    <img src={(person && person.image) || defaultImage} alt="random user" className={cx('user-img')} />
                    <p className={cx('user-title')}>My {title} is</p>
                    <p className={cx('user-value')}>{value}</p>
                    <div className={cx('values-list')}>
                        <button className={cx('icon')} data-label="name" onMouseOver={handleValue}>
                            <FaUser size={32} />
                        </button>
                        <button className={cx('icon')} data-label="email" onMouseOver={handleValue}>
                            <FaEnvelopeOpen size={32} />
                        </button>
                        <button className={cx('icon')} data-label="age" onMouseOver={handleValue}>
                            <FaCalendarTimes size={32} />
                        </button>
                        <button className={cx('icon')} data-label="address" onMouseOver={handleValue}>
                            <FaMap size={32} />
                        </button>
                        <button className={cx('icon')} data-label="phone" onMouseOver={handleValue}>
                            <FaPhone size={32} />
                        </button>
                        <button className={cx('icon')} data-label="password" onMouseOver={handleValue}>
                            <FaLock size={32} />
                        </button>
                    </div>
                    <button className={cx('btn')} type="button" onClick={fetchData}>
                        {loading ? 'loading...' : 'random user'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Random;
