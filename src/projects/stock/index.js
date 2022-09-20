import { useEffect, useState } from 'react';
import classnames from 'classnames/bind';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';

import styles from './stock.module.scss';
import Photo from './Photo';

const cx = classnames.bind(styles);
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;
const clientId = 'f7N-c7ynV9x6FAE3c1mP35-_1uRQeFNKMYlRro55XGA';

function StockPhoto() {
    const [query, setQuery] = useState('');
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        const res = await axios();
    };
    return (
        <div>
            <section className={cx('search')}>
                <form className={cx('search-form')}>
                    <input
                        type="text"
                        placeholder="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className={cx('form-input')}
                    />
                    <button type="submit" className={cx('submit-btn')}>
                        <FaSearch />
                    </button>
                </form>
            </section>
            <section className={cx('photos')}>
                <div className={cx('photos-center')}>
                    {photos.map((image, index) => {
                        return <Photo key={index} {...image} />;
                    })}
                </div>
                {loading && <h2 className={cx('loading')}>Loading...</h2>}
            </section>
        </div>
    );
}

export default StockPhoto;
