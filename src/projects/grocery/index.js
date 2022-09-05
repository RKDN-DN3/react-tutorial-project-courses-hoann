import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

import styles from './grocery.module.scss';

const cx = classNames.bind(styles);

function Grocery() {
    const [grocery, setGrocery] = useState('');
    const lstGroceryStore = localStorage.getItem('grocery');
    const [lstGrocery, setLstGrocery] = useState(JSON.parse(lstGroceryStore) ?? []);
    const [clear, setClear] = useState(JSON.parse(lstGroceryStore) && true);
    const [alert, setAlert] = useState({});
    const [status, setStatus] = useState('Submit');
    const [editId, setEditId] = useState();

    const ref = useRef();

    const handleAddGrocery = (e) => {
        e.preventDefault();
        if (grocery.trim().length === 0) {
            setAlert({ message: 'Please Enter Value', type: 'danger' });
            return;
        }
        if (status === 'Submit') {
            setAlert({ message: 'Item Added To The List', type: 'success' });
            setClear(true);
            setLstGrocery((pre) => [...pre, grocery]);
            setGrocery('');
        } else {
            lstGrocery[editId] = grocery;
            setAlert({ message: 'Value Changed', type: 'success' });
            setGrocery('');
        }
    };

    useEffect(() => {
        const id = setTimeout(() => {
            setAlert({});
        }, 3000);

        if (lstGrocery.length === 0) {
            setClear(false);
        }
        localStorage.setItem('grocery', JSON.stringify(lstGrocery));
        return () => clearTimeout(id);
    }, [alert, lstGrocery]);

    const handleDelete = (index) => {
        const newLstGrocery = [...lstGrocery];
        newLstGrocery.splice(index, 1);
        setLstGrocery(newLstGrocery);
        setAlert({ message: 'Item Removed', type: 'danger' });
    };

    const handleEdit = (index) => {
        setStatus('Edit');
        const obj = lstGrocery[index];
        ref.current.focus();
        setGrocery(obj);
        setEditId(index);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('center')}>
                {alert && <span className={cx(alert.type)}>{alert.message}</span>}
                <span className={cx('main-title')}>Grocery Bud</span>
                <form className={cx('form')}>
                    <input
                        ref={ref}
                        className={cx('grocery')}
                        value={grocery}
                        onChange={(e) => setGrocery(e.target.value)}
                        placeholder="e.g. eggs"
                    ></input>
                    <button className={cx('action')} onClick={(e) => handleAddGrocery(e)}>
                        {status}
                    </button>
                </form>
                <div className={cx('todo-list')}>
                    {lstGrocery.map((p, index) => (
                        <div key={index} className={cx('todo')}>
                            <span className={cx('content')}>{p}</span>
                            <FaEdit
                                color="green"
                                size={15}
                                style={{ margin: '0px 10px', cursor: 'pointer' }}
                                onClick={() => handleEdit(index)}
                            />
                            <FaTrashAlt
                                color="red"
                                size={15}
                                style={{ cursor: 'pointer' }}
                                onClick={() => handleDelete(index)}
                            />
                        </div>
                    ))}
                    {clear && (
                        <button
                            className={cx('clear-btn')}
                            onClick={() => {
                                setLstGrocery([]);
                                setClear(false);
                                setAlert({ message: 'Empty List', type: 'danger' });
                            }}
                        >
                            Clear Items
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Grocery;
