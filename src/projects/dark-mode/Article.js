import classnames from 'classnames/bind';

import styles from './darkmode.module.scss';

const cx = classnames.bind(styles);

function Article({ title, snippet, date, length }) {
    console.log(date);
    return (
        <article className={cx('post')}>
            <h2>{title}</h2>
            <div className={cx('post-info')}>
                <span>{date.toDateString()}</span>
                <span>{length} min read</span>
            </div>
            <p>{snippet}</p>
        </article>
    );
}

export default Article;
