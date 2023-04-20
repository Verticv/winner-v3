import React from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

/* Install pure-react-carousel using -> npm i pure-react-carousel */

// const BackButton = () => {
//   return (
//     <ButtonBack
//       role="button"
//       aria-label="slide backward"
//       className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
//       id="prev"
//     >
//       <svg
//         width={8}
//         height={14}
//         viewBox="0 0 8 14"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M7 1L1 7L7 13"
//           stroke="white"
//           strokeWidth={2}
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     </ButtonBack>
//   );
// };

// const NextButton = () => {
//   return (
//     <ButtonNext
//       role='button'
//       aria-label='slide forward'
//       className='absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400'
//       id='next'
//     >
//       <svg
//         width={8}
//         height={14}
//         viewBox='0 0 8 14'
//         fill='none'
//         xmlns='http://www.w3.org/2000/svg'
//       >
//         <path
//           d='M1 1L7 7L1 13'
//           stroke='white'
//           strokeWidth={2}
//           strokeLinecap='round'
//           strokeLinejoin='round'
//         />
//       </svg>
//     </ButtonNext>
//   );
// };

// const CustomSlide = ({
//   index,
//   img = {
//     url: 'https://images.placeholders.dev/?width=200&height=300',
//     alt: 'image',
//   },
// }) => {
//   const { url, alt } = img;
//   return (
//     <Slide index={index}>
//       {/* <div style={{ background: "blue", width: "200px" }}> */}
//       <h1>This is a test slide to demonstrate, how this affects height</h1>
//       <p>
//         Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
//         eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
//         voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
//         clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
//         amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
//         nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
//         sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
//         rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
//         ipsum dolor sit amet.
//       </p>
//       {/* </div> */}
//     </Slide>
//   );
// };

// const CustomAnimatedSlide = ({
//   index,
//   img = {
//     url: "https://images.placeholders.dev/?width=200&height=300",
//     alt: "image",
//   },
// }) => {
//   const { url, alt } = img;
//   return (
//     <Slide className="space-y-4" index={index}>
//       <h1>This is a test slide to demonstrate, how this affects height</h1>
//       <p>
//         Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
//         eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
//         voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
//         clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
//         amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
//         nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
//         sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
//         rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
//         ipsum dolor sit amet.
//       </p>
//     </Slide>
//   );
// };

const SlideWithAnimation = () => {
  return (
    <div
      style={{
        width: 'inherit',
        minHeight: '500px',
        backgroundImage:
          'url(https://images.placeholders.dev/?width=252&height=500)',
        backgroundRepeat: 'no-repeat',
        // backgroundSize: "cover",
      }}
      className='bg-white border-2 border-slate-900 h-full'
    >
      {/* <div style={{ minHeight: "500px" }}> */}
      {/* <h1>This is a test slide to demonstrate, how this affects height</h1>
        <p>
          lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. at vero eos et accusam et justo duo dolores et ea
          rebum. stet clita kasd gubergren, no sea takimata sanctus est lorem
          ipsum dolor sit amet. lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. at vero eos et accusam
          et justo duo dolores et ea rebum. stet clita kasd gubergren, no sea
          takimata sanctus est lorem ipsum dolor sit amet.
        </p> */}
      {/* </div> */}
    </div>
  );
};

// visibleSlides={2}
// totalSlides={6}
// orientation="vertical"
// naturalSlideWidth={400}
// naturalSlideHeight={500}
// step={2}

// Slider with animation
export default function CarouselV2Vertical() {
  return (
    <div className='container mx-auto'>
      <div className='vertical_carousel flex items-center justify-center w-full h-full py-24 sm:py-8 px-4'>
        <CarouselProvider
          visibleSlides={1}
          totalSlides={9}
          step={1}
          orientation='vertical'
          naturalSlideWidth={100}
          naturalSlideHeight={200}
          // isIntrinsicHeight
          isPlaying
        >
          {/* <BackButton /> */}
          <Slider
            classNameTrayWrap='carousel_tray_wrapper'
            className='card_animation'
          >
            {Array(9)
              .fill(undefined)
              .map((_, index) => (
                <Slide className='card_animation_slide' index={index}>
                  <SlideWithAnimation />
                </Slide>
              ))}
          </Slider>
          {/* <NextButton /> */}
        </CarouselProvider>
      </div>
    </div>
  );
}
