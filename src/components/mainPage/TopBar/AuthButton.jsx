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
        background: 'linear-gradient(to right, #df52ff, #6c22ff)',
        textShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
        ...style,
      }}
      className={`h-25px w-84px rounded-4px flex mt-2px items-center justify-center text-white text-12px font-spoqaMedium hover:brightness-125 filter ${className}`}
      {...buttonProperties}
    >
      {buttonText}
    </button>
  );
};

export default AuthButton;
