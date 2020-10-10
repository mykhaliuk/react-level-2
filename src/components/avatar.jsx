import React from 'react';

const avatarStyle = {
  height: '3rem',
  width: '3rem',
  clipPath: 'circle(50%)',
  marginRight: '1rem',
};
export const Avatar = ({ src }) => {
  return <img src={src} alt="user avatar" style={avatarStyle} />;
};
