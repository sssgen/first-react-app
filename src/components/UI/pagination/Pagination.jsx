import React from 'react';
import { getPagesArray } from '../../../utils/postPages';

const Pagination = ({totalPages, postPage, changePage}) => {

    let pagesArray = getPagesArray(totalPages);

    return (
        <div className="page__wrapper">
            {pagesArray.map(p =>
                <span
                    onClick={() => changePage(p) }
                    key={p} 
                    className={postPage === p ? "page page__current" : "page"}
                > 
                    {p} 
                </span>    
            )}
        </div>
    );
};

export default Pagination;