import Loading from 'react-loading';
import classnames from 'classnames/bind';

import styles from './hackernew.module.scss';

import { useGlobalContext } from './context';

const cx = classnames.bind(styles);
function Stories() {
    const { isLoading, hits, removeStory } = useGlobalContext();

    if (isLoading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Loading type="spinningBubbles" color="red" />
            </div>
        );
    }
    return (
        <section className={cx('stories')}>
            {hits.map((story) => {
                const { objectID, title, num_comments, url, points, author } = story;
                return (
                    <article key={objectID} className={cx('story')}>
                        <h4 className={cx('title')}>{title}</h4>
                        <p className={cx('info')}>
                            {points} points by <span>{author} | </span> {num_comments} comments
                        </p>
                        <div>
                            <a href={url} className={cx('read-link')} target="_blank" rel="noopener noreferrer">
                                read more
                            </a>
                            <button className={cx('remove-btn')} onClick={() => removeStory(objectID)}>
                                remove
                            </button>
                        </div>
                    </article>
                );
            })}
        </section>
    );
}

export default Stories;
