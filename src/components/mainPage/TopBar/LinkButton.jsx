import React from 'react';

const LinkButton = ({
  buttonText,
  linkProps: {
    style: linkStyle,
    className: linkClassName,
    ...linkProperties
  } = {
    style: {},
    className: '',
  },
  buttonProps: { style, className, ...buttonProperties } = {
    style: {},
    className: '',
  },
}) => {
  return (
    <a
      target='_blank'
      style={linkStyle}
      className={linkClassName}
      {...linkProperties}
    >
      <button
        style={{
          width: '84px',
          height: '25px',
          borderRadius: '4px',
          textShadow: ' 0px 0px 5px rgba(0, 0, 0, 0.5)',
          // TODO: Add box shadow
          ...style,
        }}
        className={`flex items-center justify-center text-white text-12px font-spoqaMedium filter hover:brightness-125 ${className}`}
        {...buttonProperties}
      >
        {buttonText}
      </button>
    </a>
  );
};

export default LinkButton;
