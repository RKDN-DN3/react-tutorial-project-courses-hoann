import classnames from 'classnames/bind';
import { useGlobalContext } from './context';

import styles from './hackernew.module.scss';

const cx = classnames.bind(styles);

function Buttons() {
    const { isLoading, page, nbPages, handlePage } = useGlobalContext();

    return (
        <div className={cx('btn-container')}>
            <button disabled={isLoading} onClick={() => handlePage('dec')}>
                prev
            </button>
            <p>
                {page + 1} of {nbPages}
            </p>
            <button disabled={isLoading} onClick={() => handlePage('inc')}>
                next
            </button>
        </div>
    );
}

export default Buttons;
