import { useState } from 'react';
import classnames from 'classnames/bind';
import ReactMarkdown from 'react-markdown';

import styles from './markdown.module.scss';

const cx = classnames.bind(styles);

function Markdown() {
    const [markdown, setMarkdown] = useState('# HoaNN');

    return (
        <div className={cx('wrapper')}>
            <textarea className={cx('input')} value={markdown} onChange={(e) => setMarkdown(e.target.value)}></textarea>
            <article className={cx('result')}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </article>
        </div>
    );
}

export default Markdown;
