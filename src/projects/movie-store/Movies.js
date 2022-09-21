import React from 'react';
import { Link } from 'react-router-dom';
import Loading from 'react-loading';
import classnames from 'classnames/bind';

import styles from './movie.module.scss';
import { useGlobalContext } from './context';

const url = 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const cx = classnames.bind(styles);
function Movies() {
    const { movies, isLoading } = useGlobalContext();
    if (isLoading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Loading type="spinningBubbles" color="#bb2525" />
            </div>
        );
    }
    return (
        <section className={cx('movies')}>
            {movies.map((movie) => {
                const { imdbID: id, Poster: poster, Title: title, Year: year } = movie;

                return (
                    <Link to={`/movie-store/${id}`} key={id} className={cx('movie')}>
                        <article>
                            <img src={poster === 'N/A' ? url : poster} alt={title} />
                            <div className={cx('movie-info')}>
                                <h4 className={cx('title')}>{title}</h4>
                                <p>{year}</p>
                            </div>
                        </article>
                    </Link>
                );
            })}
        </section>
    );
}

export default Movies;
