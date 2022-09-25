import classnames from 'classnames/bind';

import styles from './quiz.module.scss';
import { useGlobalContext } from './context';

const cx = classnames.bind(styles);
function SetupForm() {
    const { quiz, handleChange, handleSubmit, error } = useGlobalContext();
    return (
        <main>
            <section className={cx('quiz', 'quiz-small')}>
                <form className={cx('setup-form')}>
                    <h2>setup quiz</h2>
                    {/* amount */}
                    <div className={cx('form-control')}>
                        <label htmlFor="amount">number of questions</label>
                        <input
                            type="number"
                            name="amount"
                            id="amount"
                            value={quiz.amount}
                            onChange={handleChange}
                            className={cx('form-input')}
                            min={1}
                            max={50}
                        />
                    </div>
                    {/* category */}

                    <div className={cx('form-control')}>
                        <label htmlFor="category">category</label>
                        <select
                            name="category"
                            id="category"
                            className={cx('form-input')}
                            value={quiz.category}
                            onChange={handleChange}
                        >
                            <option value="sports">sports</option>
                            <option value="history">history</option>
                            <option value="politics">politics</option>
                        </select>
                    </div>
                    {/* difficulty */}

                    <div className={cx('form-control')}>
                        <label htmlFor="difficulty">select difficulty</label>
                        <select
                            name="difficulty"
                            id="difficulty"
                            className={cx('form-input')}
                            value={quiz.difficulty}
                            onChange={handleChange}
                        >
                            <option value="easy">easy</option>
                            <option value="medium">medium</option>
                            <option value="hard">hard</option>
                        </select>
                    </div>
                    {error && <p className={cx('error')}>can't generate questions, please try different options</p>}
                    <button type="submit" onClick={handleSubmit} className={cx('submit-btn')}>
                        start
                    </button>
                </form>
            </section>
        </main>
    );
}

export default SetupForm;
