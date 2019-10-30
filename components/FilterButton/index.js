import React from 'react'
import { MdExpandMore } from 'react-icons/md';

function FilterButton() {
 const [filterState, setFilterState] = React.useState(true);
  const handleChange = e => {
    setFilterState(!filterState);
  };
  
  let content;
  if (filterState) {
    content = 'Pick sport';
  } else {
    content = 'Football';
  }

  return (
       <button class="bg-transparent py-2 px-4 border border-blue-500 focus:outline-none rounded flex flex-row " onClick={handleChange}>
            <div>{content}</div> 
            <div className="ml-2 self-center"><MdExpandMore /></div>
        </button>
  );
}

export default FilterButton
