import './pagination.css';
import { Link } from 'react-router-dom';

export const Pagination = ({ currentPage, onPageChange }) => {
    const renderPaginationNumbers = () => {
        const paginationNumbers = [];
        const totalPages = 26; // Pixabay provide only 26 pages

        const startPage = Math.max(1, currentPage - 2);
        const endPage = Math.min(totalPages, startPage + 4);

        for (let i = startPage; i <= endPage; i++) {
            paginationNumbers.push(
                <Link
                    key={i}
                    to="#"
                    className={i === currentPage ? "active" : ""}
                    onClick={() => onPageChange(i)}
                >
                    {i}
                </Link>
            );
        }

        console.log(paginationNumbers)
        return paginationNumbers;
    };

    const handlePrevClick = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < 26) { 
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="pagination-container">
            <div className="pagination">
                <Link to="#" className="prev" onClick={handlePrevClick}>&laquo; Prev</Link>
                {renderPaginationNumbers()}
                <Link to="#" className="next" onClick={handleNextClick}>Next &raquo;</Link>
            </div>
        </div>
    );
};
