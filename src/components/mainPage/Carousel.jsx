import React, { useEffect, useState } from "react";
import visual1 from "../../images/carousel/visual.png";
import visual2 from "../../images/carousel/visual2.png";
import { useHistory } from "react-router-dom";

const images = [visual1, visual2, visual1, visual2, visual1];
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
    <div className="absolute z-10 w-full flex justify-start bottom-10px left-10px space-x-3px">
      {images.map((img, i) => (
        <button
          key={i + `${img}`}
          className={`${
            currentImage === i ? "bg-white rounded-5px w-29px h-12px" : "bg-white opacity-30 rounded-full w-12px h-12px"
          } p-3px`}
          onClick={() => setCurrentImage(i)}
        >
          {currentImage === i && (
            <div
              style={{
                backgroundColor: currentImage === i ? "white" : "transparent",
              }}
              className={`w-full h-full ${currentImage === i ? "bg-white" : "bg-transparent"}`}
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
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          key={i + `${img}`}
          src={images[i]}
          className={`${
            currentImage === i ? "opacity-100" : "opacity-0"
          } absolute w-full h-full object-none transition duration-300 cursor-pointer rounded-8px`}
          alt={"banner_images"}
        />
      ))}
    </>
  );

  const gameStartButton = (
    <div
      style={{
        width: "134px",
        height: "35px",
        background: "linear-gradient(to right, #ff7760, #f14a53)",
        boxShadow: "2px 2px 10px 0px rgba(0, 0, 0, 0.3)",
        bottom: "47px",
        right: "283px",
      }}
      className="absolute bottom-0 right-0 rounded-full cursor-pointer filter hover:brightness-125 flex items-center justify-center"
      onClick={() => (currentImage % 2 === 1 ? history.push("/live-casino") : history.push("/bet-combination"))}
    >
      <p style={{ fontSize: "15px" }} className="text-white font-spoqaBold flex items-center h-15px">
        게임시작
      </p>
    </div>
  );

  useEffect(() => {
    let timer1 = setTimeout(() => {
      if (isHover === false) {
        if (currentImage === images.length - 1) {
          setCurrentImage(0);
        } else {
          setCurrentImage((prev) => prev + 1);
        }
      }
    }, 5000);
    return () => {
      clearTimeout(timer1);
    };
  }, [currentImage, isHover]);

  // TODO: check/apply the shadow!
  return (
    <div
      style={{
        height: "325px",
        width: "942px",
        boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.4)",
      }}
      className="flex flex-shrink-0 rounded-8px"
    >
      <div style={{ height: "325px", width: "100%" }} className="relative flex items-center justify-center">
        {imagesDisplay}
        {positionIndicator}
        {gameStartButton}
      </div>
    </div>
  );
};

export default Carousel;
