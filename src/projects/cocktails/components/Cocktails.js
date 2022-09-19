import Loading from 'react-loading';
import classNames from 'classnames/bind';

import Cocktail from './Cocktail';
import Search from './Search';
import styles from '../cocktails.module.scss';
import { useGlobalContext } from '../context';

const cx = classNames.bind(styles);

function CocktailList() {
    const { cocktails, loading } = useGlobalContext();
    if (loading) {
        return (
            <div className={cx('section')} style={{ display: 'flex', justifyContent: 'center' }}>
                <Loading type="bars" color="#2680c0" />;
            </div>
        );
    }
    if (cocktails.length < 1) {
        return (
            <section className={cx('section')}>
                <h2 className={cx('section-title')}>no cocktails matched your search criteria</h2>;
            </section>
        );
    }
    return (
        <>
            <section className={cx('section')}>
                <h2 className={cx('section-title')}>cocktails</h2>
                <div className={cx('cocktails-center')}>
                    {cocktails.map((item) => {
                        return <Cocktail key={item.idDrink} data={item} />;
                    })}
                </div>
            </section>
        </>
    );
}

export default CocktailList;
