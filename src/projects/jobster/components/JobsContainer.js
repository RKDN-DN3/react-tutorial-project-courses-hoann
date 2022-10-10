import { useEffect } from 'react';
import Loading from 'react-loading';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames/bind';

import styles from './components.module.scss';
import Job from './Job';
import { getAllJobs } from '../features/allJobs/allJobsSlice';
import PageBtnContainer from './PageBtnContainer';

const cx = classnames.bind(styles);
const JobsContainer = () => {
    const { jobs, isLoading, page, totalJobs, numOfPages, search, searchStatus, searchType, sort } = useSelector(
        (store) => store.allJobs,
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllJobs());
    }, [page, search, searchStatus, searchType, sort]);

    if (isLoading) {
        return (
            <div style={{ marginTop: '20px' }}>
                <Loading type="spinningBubbles" color="#3498db" />
            </div>
        );
    }
    if (jobs.length === 0) {
        return (
            <div>
                <h2>No jobs to display...</h2>
            </div>
        );
    }

    return (
        <div className={cx('allJobs-main')}>
            <h5>
                {totalJobs} job{jobs.length > 1 && 's'} found
            </h5>
            <div className={cx('jobs')}>
                {jobs.map((job) => {
                    return <Job key={job._id} {...job} />;
                })}
            </div>
            {numOfPages > 1 && <PageBtnContainer />}
        </div>
    );
};
export default JobsContainer;
