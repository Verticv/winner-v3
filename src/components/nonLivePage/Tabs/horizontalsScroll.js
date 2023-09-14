export default function horizontalsScroll(
  array,
  tapIdPrefix,
  scrollWrapperId,
  buttonIndex,
  actualElementWidth,
  additionLeftScroll = 0
) {
  const activeTapId = buttonIndex === 0 ? 0 : buttonIndex || array[buttonIndex]?.id;
  const scrollWrapper = window.document.querySelector(`#${scrollWrapperId}`);

  if (scrollWrapper) {
    setTimeout(() => {
      const elementWidth = window.document.querySelector(`#${tapIdPrefix}${activeTapId}`)?.offsetWidth;
      const leftScrollValue = (activeTapId - 1) * (actualElementWidth || elementWidth) + additionLeftScroll;
      scrollWrapper.scroll({
        left: leftScrollValue,
        behavior: "smooth",
      });
    }, 0);
  }
}
