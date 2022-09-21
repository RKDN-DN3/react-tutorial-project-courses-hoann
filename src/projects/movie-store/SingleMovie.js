import { useParams, Link } from 'react-router-dom';
import Loading from 'react-loading';
import classnames from 'classnames/bind';

import useFetch from './useFetch';
import styles from './movie.module.scss';

const cx = classnames.bind(styles);
function SingleMovie() {
    const { id } = useParams();
    const { isLoading, error, data: movie } = useFetch(`&i=${id}`);

    if (isLoading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Loading type="spinningBubbles" color="#bb2525" />
            </div>
        );
    }
    if (error.show) {
        return (
            <div className={cx('page-error')}>
                <h1>{error.msg}</h1>
                <Link to="/movie-store" className={cx('btn')}>
                    back to movies
                </Link>
            </div>
        );
    }
    return (
        <div style={{ padding: '4rem' }}>
            <section className={cx('single-movie')}>
                <img src={movie.Poster} alt={movie.Title} />
                <div className={cx('single-movie-info')}>
                    <h2>{movie.Title}</h2>
                    <p>{movie.Plot}</p>
                    <h4>{movie.Year}</h4>
                    <Link to="/movie-store" className={cx('btn')}>
                        back to movies
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default SingleMovie;
