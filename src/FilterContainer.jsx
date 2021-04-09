import { mockSearchData } from './mockData.js';
import Filter from './Filter.jsx';
import { useState } from 'react';
import styled, { css }from 'styled-components';

const FilterPageFlexBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: 275px;
  width: 1350px;
  align-items: start;
  margin: 3% auto 4%;
  justify-content: space-between;
  position: relative;
`;

const FilterFlexBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: 175px;
  width: 1350px;
  align-items: start;
  justify-content: flex-start;
`;

const PageChangeFlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 150px;
  position: absolute;
  bottom: 0px;
`;

const PageButton = styled.button`
  background: whitesmoke;
  border-radius: 3px;
  border: 1px solid #bfbfbf;
  color: #808080;
  font-size: 18px;
  font-weight: bold;

  ${props => props.inactive && css`
  background: #d9d9d9;
  border: none
  color: #bfbfbf;
`}
`;

const FilterContainer = ({filterState, setFilter}) => {

  const [currPage, setPage] = useState(1);
  const numPerPage = 6;
  const totalPages = Math.ceil(mockSearchData.length / numPerPage);
  const maxIndex = (currPage * numPerPage) - 1;
  const minIndex = maxIndex - (numPerPage - 1);

  //Create Filter components for filters within the current page's index range
  const filters = mockSearchData.filter((filter, i)=> i >= minIndex && i <= maxIndex).map((filter) => {

    const {
      _id,
      title,
      emoticon
    } = filter;

    return <Filter
      filterState={filterState}
      setFilter={setFilter}
      key={_id}
      id={_id}
      title={title}
      emoticon={emoticon}
    />
  })

  const pageBack = () =>{
    if (currPage > 1){
      let currPageCopy = currPage;
      currPageCopy--;
      setPage(currPageCopy);
    }
  }

  const pageFwd = () =>{
    if (currPage < totalPages){
      let currPageCopy = currPage;
      currPageCopy++;
      setPage(currPageCopy);
    }
  }

  //if the 1st/ last page of filters is visible, back/ fwd button should be inactive
  let backButton = currPage === 1 ? <PageButton inactive onClick={pageBack}>{'<'}</PageButton> :
  <PageButton onClick={pageBack}>{'<'}</PageButton>

  let fwdButton = currPage === totalPages ? <PageButton inactive onClick={pageFwd}>{'>'}</PageButton> :
  <PageButton onClick={pageFwd}>{'>'}</PageButton>

  return(
    <FilterPageFlexBox>
      <FilterFlexBox>
        {filters}
      </FilterFlexBox>
      <PageChangeFlexBox>
          {backButton}
          {fwdButton}
          <p>Page {currPage} of {totalPages} results</p>
        </PageChangeFlexBox>
    </FilterPageFlexBox>
  )
}

export default FilterContainer;