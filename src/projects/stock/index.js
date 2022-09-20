import { useEffect, useRef, useState } from 'react';
import classnames from 'classnames/bind';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';

import styles from './stock.module.scss';
import Photo from './Photo';

const cx = classnames.bind(styles);
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;
const clientId = '?client_id=2LTqHddj40esyqcF-4ti8tj8lLu5XX27FpWLIRPyqGg';

function StockPhoto() {
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [newImages, setNewImages] = useState(false);
    const mounted = useRef(false);

    const fetchData = async () => {
        setLoading(true);
        let url;
        const urlPage = `&page=${page}`;
        const urlQuery = `&query=${query}`;
        if (query) {
            url = searchUrl + clientId + urlPage + urlQuery;
        } else {
            url = mainUrl + clientId + urlPage;
        }

        const res = await (await axios(url)).data;
        setPhotos((oldPhotos) => {
            if (query && page === 1) {
                return res.results;
            } else if (query) {
                return [...oldPhotos, ...res.results];
            } else {
                return [...oldPhotos, ...res];
            }
        });
        setLoading(false);
        setNewImages(false);
    };

    useEffect(() => {
        fetchData();
    }, [page]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (!query) return;
        if (page === 1) {
            fetchData();
        }
        setPage(1);
    };

    const event = () => {
        if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
            setNewImages(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', event);
        return () => window.removeEventListener('scroll', event);
    }, []);

    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
            return;
        }
        if (!newImages) return;
        if (loading) return;
        setPage((oldPage) => oldPage + 1);
    }, [newImages]);

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
                    <button type="submit" className={cx('submit-btn')} onClick={handleSearch}>
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
