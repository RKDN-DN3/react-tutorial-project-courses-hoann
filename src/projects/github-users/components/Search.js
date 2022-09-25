import { useState } from 'react';
import classnames from 'classnames/bind';
import { FaSearch } from 'react-icons/fa';

import styles from './search.module.scss';
import { useGlobalContext } from '../Context/context';

const cx = classnames.bind(styles);
function Search() {
    const [value, setValue] = useState('');
    const { requests, searchGithubUser, error } = useGlobalContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value !== '') {
            searchGithubUser(value);
        }
    };
    return (
        <div className={cx('section')}>
            <div className={cx('section-center')}>
                <form onSubmit={handleSubmit}>
                    <div className={cx('form-control')}>
                        <FaSearch />
                        <input
                            placeholder="Enter Github User"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        ></input>
                        <button onClick={handleSubmit}>search</button>
                    </div>
                </form>
                <h3>requests : {requests} / 60</h3>
                <article>
                    <p>{error.msg}</p>
                </article>
            </div>
        </div>
    );
}

export default Search;
