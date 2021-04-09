import styled, {css} from 'styled-components';

const FilterButton = styled.button`
  background: white;
  border-radius: 3px;
  border: 1px solid #d9d9d9;
  box-shadow: 0 .2px 1px 0 rgba(0,0,0,0.19), 0 3px 6px 0 rgba(0,0,0,0.1);
  height: 70px;
  width: 375px;
  margin: auto 60px 15px 0px;
  color: black;
  font-weight: bold;
  font-size: 17px;
  font-family: Arial, Helvetica, sans-serif;
 
  ${props => props.selected && css`
    background: #003300;
    color: white;
    outline: none;
  `}
`;

const Filter = ({id, emoticon, title, filterState, setFilter}) =>{

  const filterClick = () => {
    console.log('this is the id: ', id);
    
    //clear state if the same filter button is clicked twice
    if (filterState !== id){
      setFilter(id);
    }else setFilter();
  }

  //filter button uses selected' styling if it has been clicked once
  //if it is clicked again or another button is clicked, it goes back to default styling
  let filter = filterState === id ? <FilterButton selected onClick={filterClick}>{emoticon} {title}</FilterButton> :
  <FilterButton onClick={filterClick}>{emoticon} {title}</FilterButton>

  return(
      <div>
        {filter}
      </div>
    )  
}

export default Filter