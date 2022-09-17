import { useEffect, useRef } from 'react';
import classnames from 'classnames/bind';

import styles from '../cocktails.module.scss';
import { useGlobalContext } from '../context';

const cx = classnames.bind(styles);
function SearchForm() {
    const { search } = useGlobalContext();
    const searchValue = useRef('');

    useEffect(() => {
        searchValue.current.focus();
    }, []);

    function searchCocktail() {
        search(searchValue.current.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <section className={cx('section', 'search')}>
            <form className={cx('search-form')} onSubmit={handleSubmit}>
                <div className={cx('form-control')}>
                    <label htmlFor="name">search your favorite cocktail</label>
                    <input type="text" name="name" id="name" ref={searchValue} onChange={searchCocktail} />
                </div>
            </form>
        </section>
    );
}

export default SearchForm;
