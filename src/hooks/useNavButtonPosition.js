import * as React from 'react';

/**
 * This hook is used to determine the left position of the navbar menu buttons.
 * it is re-compute the position when the window is resized.
 * @returns the left size in pixels.
 */
export default function useNavButtonPosition(wrapperIdName, buttonIdName) {
  const [windowSize, setWindowSize] = React.useState({
    width: window.innerWidth,
  });
  const [navButtonPosition, setNavButtonPosition] = React.useState(0);

  React.useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    const menuWrapper = document.getElementById(wrapperIdName);
    const navButton = document.getElementById(buttonIdName);
    const buttonPosition = navButton.offsetLeft;
    const menuPosition = menuWrapper.offsetLeft;
    const actualLeftPosition = menuPosition + buttonPosition;
    setNavButtonPosition(actualLeftPosition);
  }, [buttonIdName, windowSize, wrapperIdName]);

  return navButtonPosition;
}
