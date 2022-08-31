import { useEffect, useState } from 'react';
import className from 'classnames/bind';
import ReactLoading from 'react-loading';
import { FaAngleDoubleRight } from 'react-icons/fa';

import styles from './tabs.module.scss';

const cx = className.bind(styles);
function Tabs() {
    const [loading, setLoading] = useState(true);
    const [tab, setTag] = useState([]);
    const [value, setValue] = useState(0);

    const fetchData = async () => {
        const response = await fetch('https://course-api.com/react-tabs-project');
        const jobs = await response.json();
        console.log(jobs);
        setTag(jobs);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return (
            <div className={cx('wrapper', 'container')}>
                <ReactLoading type="spinningBubbles" color="#49a6e9" />;
            </div>
        );
    }

    const job = tab[value];
    return (
        <div className={cx('wrapper', 'container')}>
            <span className={cx('main-title')}>Experience</span>
            <div className={cx('underline')}></div>
            <div className={cx('center')}>
                <div className={cx('tabs')}>
                    {tab.map((tag, index) => (
                        <button className={cx('tab-name')} key={tag.id} onClick={() => setValue(index)}>
                            {tag.company}
                        </button>
                    ))}
                </div>
                <div className={cx('content')}>
                    <span className={cx('job')}>{job.title}</span>
                    <span className={cx('company')}>{job.company}</span>
                    <span className={cx('dates')}>{job.dates}</span>
                    {job.duties.map((dutie, index) => (
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <FaAngleDoubleRight color="#2caeba" style={{ marginRight: '30px' }} />
                            <p key={index} className={cx('dutie')}>
                                {dutie}
                            </p>
                        </div>
                    ))}
                    <button className={cx('more')}>MORE INFO</button>
                </div>
            </div>
        </div>
    );
}

export default Tabs;
