import React from 'react';

export const ErrorMessage = ({ data, ...props }) => {
  return (
    <div>
      <h3>
        OMG{' '}
        <span role="img" aria-label="omg emoji">
          😲
        </span>
      </h3>
      <p>{data}</p>
    </div>
  );
};
