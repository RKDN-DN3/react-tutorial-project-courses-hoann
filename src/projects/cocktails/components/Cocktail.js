import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from '../cocktails.module.scss';

const cx = classNames.bind(styles);

function Cocktail({ data }) {
    return (
        <article className={cx('cocktail')}>
            <div className={cx('img-container')}>
                <img src={data.strDrinkThumb} alt={data.strGlass} />
            </div>
            <div className={cx('cocktail-footer')}>
                <h3>{data.strDrink}</h3>
                <h4>{data.strGlass}</h4>
                <p>{data.strAlcoholic}</p>
                <Link to={`/cocktails/${data.idDrink}`} className={cx('btn', 'btn-primary', 'btn-details')}>
                    details
                </Link>
            </div>
        </article>
    );
}

export default Cocktail;
