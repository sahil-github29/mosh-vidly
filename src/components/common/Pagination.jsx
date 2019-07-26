import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = props => {
  const { itemCount, pageSize, onPageChange, currentPage } = { ...props };
  const pagesCount = Math.ceil(itemCount / pageSize);
  // Handling edge case
  if (pagesCount === 1) return null;

  /*to convert the pageCount into array like [1,2,3]
     we will use "lodash"*/
  // we are adding "+1" because _.range doesn't include the end number itself
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li
            className={currentPage === page ? "page-item active" : "page-item"}
            key={page}
          >
            <a onClick={() => onPageChange(page)} className="page-link">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
Pagination.propTypes = {
  itemCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
};

export default Pagination;
