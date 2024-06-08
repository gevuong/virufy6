import React from 'react';

const Button1 = ({ size, type, path, label, radius, gradientBackground, width, height, className }) => {
  return (
    <button
      className={`${className} ${size} ${type}`}
      style={{
        borderRadius: radius,
        background: gradientBackground,
        width: width,
        height: height,
      }}
      onClick={() => window.location.href = path}
    >
      {label}
    </button>
  );
};
export default Button1;
