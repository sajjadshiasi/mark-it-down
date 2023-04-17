export const hiddenScroll = (isHidden: boolean) => {
  if (isHidden) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
};
