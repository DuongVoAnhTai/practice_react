import classNames from 'classnames/bind';
import { useMemo, useState } from 'react';
import styles from './Pagination.module.scss';
import data from './data';

const cx = classNames.bind(styles);

function Pagination() {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage] = useState(4);

    const start = (currentPage - 1) * itemPerPage;
    const end = start + itemPerPage;
    const paginationData = useMemo(() => {
        return data.slice(start, end);
    }, [start, end]);

    const totalPages = Math.ceil(data.length / itemPerPage);

    const handlePreBtn = () => {
        setCurrentPage((prev) => {
            return prev - 1;
        });
    };

    const handleNextBtn = () => {
        setCurrentPage((prev) => {
            return prev + 1;
        });
    };

    const handlePagination = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <h1>Pagination in HTML CSS & Javascript</h1>
            </header>

            <div className={cx('container')}>
                {paginationData.map((item, index) => (
                    <div key={index} className={cx('card')}>
                        <img className={cx('card-img')} src={item.img} alt="" />

                        <div className={cx('card-content')}>
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>

            <footer className={cx('footer')}>
                <div className={cx('btn-group')}>
                    <button className={cx('pre-btn')} onClick={handlePreBtn} disabled={currentPage === 1}>
                        Previous
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            className={cx('btn', {
                                active: currentPage === index + 1,
                            })}
                            onClick={() => {
                                handlePagination(index + 1);
                            }}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button className={cx('next-btn')} onClick={handleNextBtn} disabled={currentPage === totalPages}>
                        Next
                    </button>
                </div>
            </footer>
        </div>
    );
}

export default Pagination;
