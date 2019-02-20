import React from 'react';

const Search = props =>
    <input onChange={event => props.updateFilter(event.target.value)} />

export default Search;
