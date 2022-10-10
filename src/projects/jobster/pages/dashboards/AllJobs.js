import { useEffect } from 'react';
import classnames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';

import styles from './dashboard.module.scss';
import FormRow from '../../components/FormRow';
import FormRowSelect from '../../components/FormRowSelect';
import { handleChange } from '../../features/allJobs/allJobsSlice';
import JobsContainer from '../../components/JobsContainer';

const cx = classnames.bind(styles);

function AllJobs() {
    const { isLoading, search, status, sortOptions } = useSelector((state) => state.allJobs);
    const { statusOptions, jobTypeOptions, jobType } = useSelector((state) => state.job);

    const dispatch = useDispatch();

    const handleJob = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch(handleChange({ name, value }));
    };

    return (
        <>
            <div className={cx('profile')}>
                <div className={cx('form')}>
                    <h3>search form</h3>
                    <div className={cx('form-center')}>
                        <FormRow type="text" name="search" value={search} handleChange={handleJob} />
                        <FormRowSelect
                            name="status"
                            handleChange={handleJob}
                            list={['all', ...statusOptions]}
                            value={status}
                        />
                        <FormRowSelect
                            name="jobType"
                            labelText="job type"
                            handleChange={handleJob}
                            list={jobTypeOptions}
                            value={jobType}
                        />
                        <FormRowSelect name="sort" handleChange={handleJob} list={sortOptions} value={jobType} />
                        <button type="submit" className={cx('btn', 'btn-block', 'btn-danger')} disabled={isLoading}>
                            clear filters
                        </button>
                    </div>
                </div>
            </div>
            <JobsContainer />
        </>
    );
}

export default AllJobs;
