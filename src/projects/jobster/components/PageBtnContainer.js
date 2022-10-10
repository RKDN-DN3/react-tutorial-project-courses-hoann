import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { useSelector, useDispatch } from 'react-redux';
// import { changePage } from '../features/allJobs/allJobsSlice';

const PageBtnContainer = () => {
    const { numOfPages, page } = useSelector((store) => store.allJobs);
    const dispatch = useDispatch();

    const pages = Array.from({ length: numOfPages }, (_, index) => {
        return index + 1;
    });

    const nextPage = () => {
        let newPage = page + 1;
        if (newPage > numOfPages) {
            newPage = 1;
        }
    };
    const prevPage = () => {
        let newPage = page - 1;
        if (newPage < 1) {
            newPage = numOfPages;
        }
    };

    return (
        <div>
            <button type="button" className="prev-btn" onClick={prevPage}>
                <HiChevronDoubleLeft />
                prev
            </button>
            <div className="btn-container">
                {pages.map((pageNumber) => {
                    return (
                        <button
                            type="button"
                            key={pageNumber}
                            className={pageNumber === page ? 'pageBtn active' : 'pageBtn'}
                        >
                            {pageNumber}
                        </button>
                    );
                })}
            </div>
            <button type="button" className="next-btn" onClick={nextPage}>
                next
                <HiChevronDoubleRight />
            </button>
        </div>
    );
};
export default PageBtnContainer;
