import classnames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';

import styles from './dashboard.module.scss';
import FormRow from '../../components/FormRow';
import FormRowSelect from '../../components/FormRowSelect';
import { clearValues, handleChange, addJob, editJob } from '../../features/job/jobSlice';

const cx = classnames.bind(styles);

function AddJobs() {
    const {
        statusOptions,
        isLoading,
        status,
        jobTypeOptions,
        jobType,
        position,
        company,
        jobLocation,
        isEditing,
        editJobId,
    } = useSelector((state) => state.job);
    const dispatch = useDispatch();

    const handleJob = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch(handleChange({ name, value }));
    };

    const handleSubmit = () => {
        if (isEditing) {
            return dispatch(editJob({ jobId: editJobId, job: { position, company, jobLocation, jobType, status } }));
        }
        dispatch(addJob({ position, company, jobLocation, jobType, status }));
    };
    return (
        <div className={cx('profile')}>
            <div className={cx('form')}>
                <h3>add job</h3>
                <div className={cx('form-center')}>
                    <FormRow type="text" name="position" value={position} handleChange={handleJob} />
                    <FormRow type="text" labelText="company" value={company} name="company" handleChange={handleJob} />
                    <FormRow
                        type="text"
                        name="jobLocation"
                        labelText="job location"
                        value={jobLocation}
                        handleChange={handleJob}
                    />
                    <FormRowSelect name="status" handleChange={handleJob} list={statusOptions} value={status} />
                    <FormRowSelect
                        name="jobType"
                        labelText="job type"
                        handleChange={handleJob}
                        list={jobTypeOptions}
                        value={jobType}
                    />
                    <div className={cx('button-container')}>
                        <button
                            type="submit"
                            className={cx('btn', 'btn-block', 'clear-btn')}
                            disabled={isLoading}
                            onClick={() => dispatch(clearValues())}
                        >
                            {isLoading ? 'Please Wait...' : 'clear'}
                        </button>
                        <button
                            type="submit"
                            className={cx('btn', 'btn-block')}
                            disabled={isLoading}
                            onClick={handleSubmit}
                        >
                            {isLoading ? 'Please Wait...' : 'submit'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddJobs;
