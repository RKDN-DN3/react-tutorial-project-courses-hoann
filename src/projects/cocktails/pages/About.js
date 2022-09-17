import classNames from 'classnames/bind';

import styles from '../cocktails.module.scss';

const cx = classNames.bind(styles);
function About() {
    return (
        <>
            <section className={cx('section', 'about-section')}>
                <h1 className={cx('section-title')}>about us</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repudiandae architecto qui
                    adipisci in officiis, aperiam sequi atque perferendis eos, autem maiores nisi saepe quisquam hic
                    odio consectetur nobis veritatis quasi explicabo obcaecati doloremque? Placeat ratione hic
                    aspernatur error blanditiis?
                </p>
            </section>
        </>
    );
}

export default About;
