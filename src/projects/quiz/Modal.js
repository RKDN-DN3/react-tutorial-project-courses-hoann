import classnames from 'classnames/bind';
import { useGlobalContext } from './context';

import styles from './quiz.module.scss';
const cx = classnames.bind(styles);
function Modal() {
    const { isModalOpen, closeModal, correct, questions } = useGlobalContext();
    const styles = ['modal-container', 'isOpen'];
    console.log(isModalOpen);
    return (
        <div className={cx(isModalOpen ? styles : 'modal-container')}>
            <div className={cx('modal-content')}>
                <h2>congrats!</h2>
                <p>You answered {((correct / questions.length) * 100).toFixed(0)}% of questions correctly</p>
                <button className={cx('close-btn')} onClick={closeModal}>
                    play again
                </button>
            </div>
        </div>
    );
}

export default Modal;
