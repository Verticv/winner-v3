import React, { useEffect, useState } from 'react';
import visual2 from '../../images/carousel/visual2.png';
import visual3 from '../../images/carousel/visual3.png';
import LeftArrow from '../../images/arrows/gold_arrow_left.png';
import RightArrow from '../../images/arrows/gold_arrow_right.png';
import { useHistory } from 'react-router-dom';

const images = [visual2, visual3];
// images must be an array of urls , if using Next JS this could something like
// const images = ['/img/img1.png', '/img/img2.png', '/img/img3.png']
// images must be an array of urls , if using Next JS this could something like
// const images = ['/img/img1.png', '/img/img2.png', '/img/img3.png']

const Carousel = () => {
  // We will start by storing the index of the current image in the state.
  const [currentImage, setCurrentImage] = useState(0);
  const [isHover, setHover] = useState(false);

  const history = useHistory();
  // Let's create dynamic buttons. It can be either left or right. Using
  // isLeft boolean we can determine which side we'll be rendering our button
  // as well as change its position and content.

  const positionIndicator = (
    <div className='absolute z-10 w-full flex justify-start bottom-10px left-10px space-x-3px'>
      {images.map((img, i) => (
        <button
          key={i}
          className={`${
            currentImage === i
              ? 'bg-white rounded-5px w-29px h-12px'
              : 'bg-white opacity-30 rounded-full w-12px h-12px'
          } p-3px`}
          onClick={() => setCurrentImage(i)}
        >
          {currentImage === i && (
            <div
              style={{
                backgroundColor: currentImage === i ? 'white' : 'transparent',
              }}
              className={`w-full h-full ${
                currentImage === i ? 'bg-white' : 'bg-transparent'
              }`}
            />
          )}
        </button>
      ))}
    </div>
  );

  const imagesDisplay = (
    <>
      {images.map((img, i) => (
        <img
          onClick={() =>
            currentImage === i
              ? history.push('/live-casino')
              : history.push('/bet-combination')
          }
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          key={i}
          src={images[i]}
          className={`${currentImage === i ? 'opacity-100' : 'opacity-0'} ${
            i === 1 && 'absolute top-0'
          } w-full h-full object-none transition duration-300 cursor-pointer rounded-8px`}
          alt={'banner_images'}
          // style={{
          //   backgroundColor: currentImage === i ? 'white' : '',
          // }}
        />
      ))}
    </>
  );

  useEffect(() => {
    let timer1 = setTimeout(() => {
      if (isHover === false) {
        if (currentImage === 0) {
          setCurrentImage(1);
        } else {
          setCurrentImage(0);
        }
      }
    }, 5000);
    return () => {
      clearTimeout(timer1);
    };
  }, [currentImage, isHover]);

  return (
    <div
      style={{
        height: '325px',
        width: '947px',
        boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.4)',
      }}
      className='flex flex-shrink-0'
    >
      <div
        style={{ height: '325px', width: '100%' }}
        className='relative flex items-center justify-center'
      >
        {imagesDisplay}
        {positionIndicator}
      </div>
    </div>
  );
};

export default Carousel;
