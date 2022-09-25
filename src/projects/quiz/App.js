import classnames from 'classnames/bind';
import Loading from 'react-loading';

import styles from './quiz.module.scss';
import { AppProvider, useGlobalContext } from './context';
import Modal from './Modal';
import SetupForm from './SetupForm';

const cx = classnames.bind(styles);
function App() {
    const { waiting, loading, questions, index, correct, nextQuestion, checkAnswer } = useGlobalContext();

    if (waiting) {
        return <SetupForm />;
    }

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Loading type="spinningBubbles" color="red" />
            </div>
        );
    }

    const { question, incorrect_answers, correct_answer } = questions[index];
    let answers = [...incorrect_answers];
    const tempIndex = Math.floor(Math.random() * 4);
    if (tempIndex === 3) {
        answers.push(correct_answer);
    } else {
        answers.push(answers[tempIndex]);
        answers[tempIndex] = correct_answer;
    }

    return (
        <div className={cx('main')}>
            <AppProvider>
                <div>
                    <Modal />
                    <section className={cx('quiz')}>
                        <p className={cx('correct-answers')}>
                            correct answers : {correct}/{index}
                        </p>
                        <article className={cx('container')}>
                            <h2 dangerouslySetInnerHTML={{ __html: question }} />
                            <div className={cx('btn-container')}>
                                {answers.map((answer, index) => {
                                    return (
                                        <button
                                            key={index}
                                            className={cx('answer-btn')}
                                            onClick={() => checkAnswer(correct_answer === answer)}
                                            dangerouslySetInnerHTML={{ __html: answer }}
                                        />
                                    );
                                })}
                            </div>
                        </article>
                        <button className={cx('next-question')} onClick={nextQuestion}>
                            next question
                        </button>
                    </section>
                </div>
            </AppProvider>
        </div>
    );
}

export default App;
