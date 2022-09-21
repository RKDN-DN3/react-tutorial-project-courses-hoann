import { useEffect, useState } from 'react';
import classnames from 'classnames/bind';

import styles from './darkmode.module.scss';
import { ARTICLES } from '../../data';
import Article from './Article';

const cx = classnames.bind(styles);
function DarkMode() {
    const themStore = localStorage.getItem('theme');
    const [theme, setTheme] = useState(themStore);

    const toggleTheme = () => {
        if (theme === 'light-theme') {
            setTheme('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
        } else {
            setTheme('light-theme');
            localStorage.setItem('theme', 'light-theme');
        }
    };

    useEffect(() => {
        const element = document.getElementsByTagName('body');
        let backgroundColor;
        let color;
        let h2Color;
        if (theme === 'dark-theme') {
            backgroundColor = '#282c35';
            color = 'white';
            h2Color = '#ffa7c4';
        } else {
            backgroundColor = '#fff';
            color = '#282c35';
            h2Color = '#d23669';
        }
        document.getElementsByClassName('app')[0].style.background = backgroundColor;
        element[0].style.color = color;
        document.querySelectorAll('h2').forEach((item) => (item.style.color = h2Color));
        document.querySelectorAll('p').forEach((item) => (item.style.color = color));

        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <div>
            <nav>
                <div className={cx('nav-center')}>
                    <h1>overreacted</h1>
                    <button className={cx('btn')} onClick={toggleTheme}>
                        toggle
                    </button>
                </div>
            </nav>
            <section className={cx('articles')}>
                {ARTICLES.map((item) => {
                    return <Article key={item.id} {...item} />;
                })}
            </section>
        </div>
    );
}

export default DarkMode;
