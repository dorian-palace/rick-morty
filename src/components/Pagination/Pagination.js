import React from 'react'
import ReactPaginate from "react-paginate";

const Pagination = ({info, pageNumber, setPageNumber }) => {

  return <ReactPaginate 
  forcePage={pageNumber === 1? 0 : pageNumber -1}
  className="pagination justify-content-center gap-4 my-4"
  nextLabel={<span style={{ color: '#ffffff' }}>Next</span>}
  previousLabel={<span style={{ color: '#ffffff' }}>Prev</span>}
  previousclassName="btn btn-primary fs-5 prev"
  nextclassName="btn btn-primary fs-5 next"
  pageclassName="page-item"
  pageLinkclassName="page-link"
  activeclassName="active"
  onPageChange={(data)=>{setPageNumber(data.selected + 1)}}
  pageCount={info?.pages} />;
};

export default Pagination