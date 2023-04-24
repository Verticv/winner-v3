import React from 'react';
import JackpotImage from '../../images/jackpot.png';

export default function Jackpot() {
  return (
    <div
      style={{
        width: '313px',
        height: '133px',
      }}
      className='mb-5px relative'
    >
      <img
        style={{ minWidth: '349px', height: '202px' }}
        src={JackpotImage}
        alt='jackpot'
        className='absolute -top-40px -left-18px'
      />
      {/* // TODO: add the number inside the image */}
    </div>
  );
}
