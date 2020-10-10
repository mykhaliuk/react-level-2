import React from 'react';

const inputStyle = {
  marginBottom: '1rem',
  fontSize: '1.5rem',
  borderRadius: '.4rem',
  padding: '.3rem',
};
const searchStyle = {
  display: 'flex',
  flexDirection: 'column',
  margin: '2rem 0',
  position: 'relative',
};
const loadingStyle = {
  fontSize: '1rem',
  color: '#FFFb',
  position: 'absolute',
  bottom: '-1rem',
  right: 0,
};
export const Search = ({ onChange, isLoading, ...props }) => {
  const handleOnChange = e => {
    onChange(e.target.value);
  };

  return (
    <div style={searchStyle}>
      <input
        autoFocus={true}
        type="text"
        style={inputStyle}
        placeholder="Search"
        onChange={handleOnChange}
      />
      {isLoading ? <span style={loadingStyle}>searching ...</span> : null}
    </div>
  );
};
