import React from 'react';
import Card from './Card';
import Currency from '../../../images/middleList/currency.png';
import currencyItemGold from '../../../images/middleList/currency_item_gold.png';
import currencyItemGrey from '../../../images/middleList/currency_item_grey.png';
import currencyItemBronze from '../../../images/middleList/currency_item_bronze.png';

const Item = ({ text, itemOrder }) => (
  <div className='flex justify-between'>
    <div className='flex'>
      <div className='relative mr-10px w-28px'>
        {itemOrder === 0 && (
          <img
            className='absolute left-0 top-0'
            src={currencyItemGold}
            alt=''
          />
        )}
        {itemOrder === 1 && (
          <img
            className='absolute left-0 top-0'
            src={currencyItemGrey}
            alt=''
          />
        )}
        {itemOrder === 2 && (
          <img
            className='absolute left-0 top-0'
            src={currencyItemBronze}
            alt=''
          />
        )}
        <p className='absolute left-10px top-2px z-10'>{itemOrder + 1}</p>
      </div>
      <p
        style={{ color: '#666666' }}
        className='text-14px font-spoqaMedium tracking-tighter mb-5px'
      >
        {text}
      </p>
    </div>
    <div>
      <p
        style={{ color: '#666666' }}
        className='text-14px font-spoqaMedium tracking-tighter mb-5px'
      >
        {text}
      </p>
    </div>
  </div>
);

const CurrencyCard = () => {
  return (
    <Card
      HeaderIcon={Currency}
      headerText='금주의 환전 TOP'
      headerActionText=''
    >
      <div style={{height:'143px'}} className='overflow-hidden'>
        <div
          id='middle-list'
          className='flex flex-col mt-12px w-full pl-11px pr-15px'
        >
          {Array(12)
            .fill(undefined)
            .map((_, i) => (
              <Item key={i} text='₩130,456,800' itemOrder={i} />
            ))}
        </div>
      </div>
    </Card>
  );
};

export default CurrencyCard;
