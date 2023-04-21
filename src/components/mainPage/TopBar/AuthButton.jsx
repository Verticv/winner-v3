import React from 'react';

const AuthButton = ({
  buttonText,
  buttonProps: { style, className, ...buttonProperties } = {
    style: {},
    className: '',
  },
}) => {
  return (
    <button
      style={{
        width: '104px',
        height: '25px',
        borderRadius: '2px',
        background: 'linear-gradient(to right, #de52ff, #6c22ff)',
        textShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
        color: '#ffdfbd',
        ...style,
      }}
      className={`flex items-center justify-center text-white text-14px font-spoqaMedium pt-px hover:brightness-125 filter ${className}`}
      {...buttonProperties}
    >
      {buttonText}
    </button>
  );
};

export default AuthButton;
