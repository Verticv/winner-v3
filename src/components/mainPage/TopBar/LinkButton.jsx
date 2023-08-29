import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({
  buttonText,
  path,
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
    <Link
      style={linkStyle}
      className={linkClassName}
      to={path}
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
        className={`flex items-center justify-center text-white text-12px filter hover:brightness-125 pb-px ${className}`}
        {...buttonProperties}
      >
        {buttonText}
      </button>
    </Link>
  );
};

export default LinkButton;
