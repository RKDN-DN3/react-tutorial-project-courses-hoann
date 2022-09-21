import classnames from 'classnames/bind';

import styles from './movie.module.scss';
import { useGlobalContext } from './context';

const cx = classnames.bind(styles);

function Search() {
    const { query, setQuery, error } = useGlobalContext();
    return (
        <form className={cx('search-form')} onSubmit={(e) => e.preventDefault()}>
            <h2>search movies</h2>
            <input type="text " className={cx('form-input')} value={query} onChange={(e) => setQuery(e.target.value)} />
            {error.show && <div className={cx('error')}>{error.msg}</div>}
        </form>
    );
}
export default Search;
