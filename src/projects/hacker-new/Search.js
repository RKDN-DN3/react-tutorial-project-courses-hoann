import classnames from 'classnames/bind';
import styles from './hackernew.module.scss';

import { useGlobalContext } from './context';

const cx = classnames.bind(styles);
function Search() {
    const { query, handleSearch } = useGlobalContext();

    return (
        <form className={cx('search-form')} onSubmit={(e) => e.preventDefault()}>
            <h2>search hacker news</h2>
            <input
                type="text"
                className={cx('form-input')}
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
            />
        </form>
    );
}

export default Search;
