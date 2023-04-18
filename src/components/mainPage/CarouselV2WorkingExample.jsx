import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

/* Install pure-react-carousel using -> npm i pure-react-carousel */

const CustomSlide = ({
  index,
  img = {
    url: "https://images.placeholders.dev/?width=200&height=300",
    alt: "image",
  },
}) => {
  const { url, alt } = img;
  return (
    <Slide className="space-y-4" index={index}>
      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
        <img
          src={url}
          alt={alt}
          className="object-cover object-center w-full"
        />
        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-1/2 p-6">
          <div className="flex h-full items-end pb-6">
            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
              Minimal Interior
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
        <img
          src={url}
          alt={alt}
          className="object-cover object-center w-full"
        />
        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-1/2 p-6">
          <div className="flex h-full items-end pb-6">
            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
              Minimal Interior
            </h3>
          </div>
        </div>
      </div>
    </Slide>
  );
};

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

const BackButton = () => {
  return (
    <ButtonBack
      role="button"
      aria-label="slide backward"
      className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
      id="prev"
    >
      <svg
        width={8}
        height={14}
        viewBox="0 0 8 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 1L1 7L7 13"
          stroke="white"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </ButtonBack>
  );
};

const NextButton = () => {
  return (
    <ButtonNext
      role="button"
      aria-label="slide forward"
      className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
      id="next"
    >
      <svg
        width={8}
        height={14}
        viewBox="0 0 8 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L7 7L1 13"
          stroke="white"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </ButtonNext>
  );
};

export default function CarouselV2WorkingExample() {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
        <CarouselProvider
          className=""
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={12}
          visibleSlides={6}
          step={1}
          infinite={false}
        >
          <div className="w-full relative flex items-center justify-center">
            <BackButton />
            <div className="w-full h-auto mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  // TODO: remove this card_animation
                  className="card_animation flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                >
                  {Array(12)
                    .fill(undefined)
                    .map((_, index) => (
                      <CustomSlide index={index} />
                    ))}
                </div>
              </Slider>
            </div>
            <NextButton />
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
}
