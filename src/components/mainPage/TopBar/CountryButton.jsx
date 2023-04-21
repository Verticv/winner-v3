import React, { useState } from 'react';

import Koreaflag from '../../../images/korea_flag.png';
import UKflag from '../../../images/uk_flag.png';
import CountryDropDown from 'components/dropdowns/CountryDropDown';
import DropDownControls from 'components/dropdowns/DropDownControls';

const CountryButton = () => {
  const [country, setCountry] = useState('KR');
  const [isCountryOpen, setCountryOpen] = useState();

  // TODO: the button should have a shadow
  const CountryButtonComponent = (
    <div
      style={{ color: '#ffdfbd' }}
      className='flex items-center hover:brightness-110 filter text-12px text-yellow-ad9e8c cursor-pointer' // TODO: check if we should return -mt-px
    >
      <img
        className='object-none'
        src={country === 'KR' ? Koreaflag : UKflag}
        alt='flag'
      />
    </div>
  );

  return (
    <DropDownControls
      buttonChild={CountryButtonComponent}
      onClick={() => setCountryOpen(!isCountryOpen)}
      onClose={() => setCountryOpen(false)}
    >
      <div className='z-50'>
        <CountryDropDown setCountry={setCountry} country={country} />
      </div>
    </DropDownControls>
  );
};

export default CountryButton;
