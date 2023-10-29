import React from 'react';

const SearchBox = ( {searchChange} ) => {
    return (
        <div>
            <input 
            className='pa2 ba b--green bg-lightest-blue' 
            type="search" 
            placeholder='Enter a name' 
            onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;