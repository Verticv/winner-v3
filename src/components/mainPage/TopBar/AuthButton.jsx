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
        height: '28px',
        borderRadius: '2px',
        background: 'linear-gradient(to bottom, #a67c52, #826140)',
        textShadow: '0px 0px 6px #000000',
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
