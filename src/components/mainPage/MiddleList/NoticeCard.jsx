import React from 'react';
import Card from './Card';
import Notice from '../../../images/middleList/notice.png';
import announcementItems from '../../../images/middleList/announcement_item.png';
import noticeItem from '../../../images/middleList/notice_item.png';

const Item = ({ text }) => (
  <div>
    <p
      style={{ color: '#666666' }}
      className='text-14px font-spoqaMedium tracking-tighter mb-5px'
    >
      {text}
    </p>
  </div>
);

const RightItem = ({ text }) => (
  <div className='flex'>
    <img className='mr-10px w-14px h-18px' src={noticeItem} alt='' />
    <p
      style={{ color: '#666666' }}
      className='text-14px font-spoqaMedium tracking-tighter mb-5px'
    >
      {text}
    </p>
  </div>
);

const NoticeCard = () => {
  return (
    <Card HeaderIcon={Notice} headerText='게시판' headerActionText='더보기 >'>
      <div className='flex justify-between mt-12px'>
        <div className='flex'>
          <div>
            <img className='ml-15px mr-10px' src={announcementItems} alt='' />
          </div>
          <div className='flex flex-col -mt-2px'>
            <Item text='이벤트 신청합니다.' />
            <Item text='이벤트 신청합니다.' />
            <Item text='이벤트 신청합니다.' />
            <Item text='이벤트 신청합니다.' />
            <Item text='이벤트 신청합니다.' />
          </div>
        </div>
        <div className='flex flex-col -mt-2px mr-16px'>
          <RightItem text='신풍사우나' />
          <RightItem text='신풍사우나' />
          <RightItem text='신풍사우나' />
          <RightItem text='신풍사우나' />
          <RightItem text='신풍사우나' />
        </div>
      </div>
    </Card>
  );
};

export default NoticeCard;
