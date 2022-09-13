import classnames from 'classnames/bind';
import styles from './hero.module.scss';

const cx = classnames.bind(styles);
function Hero() {
    return (
        <section className={cx('wrapper')}>
            <div className={cx('hero-center')}>
                <article className={cx('hero-info')}>
                    <h1>
                        Payments infrastructure <br />
                        for the internet
                    </h1>
                    <p>
                        Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs
                        to accept payments, send payouts, and manage their businesses online.
                    </p>
                    <button className={cx('btn')}>Start now</button>
                </article>
                <article className={cx('hero-images')}>
                    <img
                        src="https://react-projects-13-stripe-submenus.netlify.app/static/media/phone.58d7e3d6.svg"
                        className={cx('phone-img')}
                        alt="phone"
                    />
                </article>
            </div>
        </section>
    );
}

export default Hero;
