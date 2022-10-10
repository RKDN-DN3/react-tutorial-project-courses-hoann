import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import classnames from 'classnames/bind';

import styles from './components.module.scss';
import JobInfo from './JobInfo';
import { setEditJob, deleteJob } from '../features/job/jobSlice';

const cx = classnames.bind(styles);
const Job = ({ _id, position, company, jobLocation, jobType, createdAt, status }) => {
    const dispatch = useDispatch();

    return (
        <div className={cx('job-detail')}>
            <header>
                <div className={cx('main-icon')}>{company.charAt(0)}</div>
                <div className={cx('info')}>
                    <h5>{position}</h5>
                    <p>{company}</p>
                </div>
            </header>
            <div className={cx('content')}>
                <div className={cx('content-center')}>
                    <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
                    <JobInfo icon={<FaCalendarAlt />} text={createdAt} />
                    <JobInfo icon={<FaBriefcase />} text={jobType} />
                    <div className={cx('status', status)}>{status}</div>
                </div>
                <footer>
                    <div className={cx('actions')}>
                        <Link
                            to="/jobster/add-job"
                            className={cx('btn-job', 'edit-btn')}
                            onClick={() => {
                                dispatch(
                                    setEditJob({
                                        editJobId: _id,
                                        position,
                                        company,
                                        jobLocation,
                                        jobType,
                                        status,
                                    }),
                                );
                            }}
                        >
                            Edit
                        </Link>
                        <button
                            type="button"
                            className={cx('btn-job', 'delete-btn')}
                            onClick={() => dispatch(deleteJob(_id))}
                        >
                            delete
                        </button>
                    </div>
                </footer>
            </div>
        </div>
    );
};
export default Job;
