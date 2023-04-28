import React from 'react';
import AnnouncementCard from './AnnouncementCard';
import NoticeCard from './NoticeCard';
import CurrencyCard from './CurrencyCard';

const MiddleList = () => {
  return (
    <div style={{paddingLeft:'41px', paddingRight:'40px'}} className='w-full flex justify-between'>
      <AnnouncementCard />
      <NoticeCard />
      <CurrencyCard />
    </div>
  );
};

export default MiddleList;
