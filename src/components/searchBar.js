import React, { useState } from 'react';
import './searchBar.css';

const SearchBar = (props) => {
    const [inputValue, setInputValue] = useState('');
    const [warning, setWarning] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSearch = () => {
        if (inputValue.trim() === '') {
            setWarning('Please enter a valid search term.');
        } else {
            setWarning('');
            props.onChange(inputValue);
        }
    };

    const clearData = () => {
        setInputValue('');
        setWarning('');
        props.onChange('');
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <>
            <div className="search-container">
                <div className="search-input-container">
                    <input
                        type="text"
                        className="search-input"
                        onChange={handleChange}
                        onKeyDown={handleKeyPress}
                        value={inputValue}
                        placeholder={props.placeholder}
                    />
                </div>
                <div className="button-wrapper">
                    <button className="search-button" onClick={handleSearch}>Search</button>
                    <button className="clear-button" onClick={clearData}>Clear</button>
                </div>
            </div>
            <div>
                {warning && <p className="warning">{warning}</p>}
            </div>
        </>
    );    
};

export default SearchBar;