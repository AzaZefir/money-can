import React from 'react';
import ReactPaginate from 'react-paginate';

export const CatalogPagination = ({onChangePage}) => {
  return (
    <div className="catalog__pagination">
      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e)=> onChangePage(e.selected + 1)}
        pageRangeDisplayed={3}
        pageCount={2}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};
