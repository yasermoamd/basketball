import React from 'react';
import ReactPaginate from 'react-paginate';
import './pagination.css';
export  default function NewsPagination({ pageCount, changePage }) {
   return (
      <div className="flex  gap-[5rem] items-center desktop:gap-4 desktop:my-6 laptop:my-6">
            <ReactPaginate
               previousLabel={'Previous'}
               nextLabel={'Next'}
               pageCount={pageCount}
               onPageChange={changePage}
               containerClassName={'paginationBttns'}
               previousLinkClassName={'previousBttn'}
               nextLinkClassName={'nextBttn'}
               disabledClassName={'paginationDisabled'}
               activeClassName={'paginationActive'}
      />
      </div>
   );
}
