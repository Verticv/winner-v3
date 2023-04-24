import React from 'react';
import AnnouncementCard from './AnnouncementCard';
import NoticeCard from './NoticeCard';
import CurrencyCard from './CurrencyCard';

const MiddleList = () => {
  return (
    <div className='w-full flex justify-between pl-41px pr-40px'>
      <AnnouncementCard />
      <NoticeCard />
      <CurrencyCard />
    </div>
  );
};

export default MiddleList;
