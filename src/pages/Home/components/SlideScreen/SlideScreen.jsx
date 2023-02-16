import { useRef, useEffect } from 'react';

const SlideScreen = () => {
  const slideShow = useRef(null);

  /**
   * We're going to move the first element in the slideshow to the end of the slideshow, and then move
   * the slideshow back to the original position
   */
  const handleSlideShow = () => {
    if (slideShow.current.children.length > 0) {
      /* We're getting the first element in the slideshow */
      const firstElement = slideShow.current.children[0];

      /* It's setting the transition property of the slideshow to 100ms ease-out all. */
      slideShow.current.style.transition = `100ms ease-out all`;

      /* It's getting the width of the first element in the slideshow. */
      const slideWidth = slideShow.current.children[0].offsetWidth;

      /* It's moving the slideshow to the left by the width of the first element in the slideshow. */
      slideShow.current.style.transform = `translateX(-${slideWidth}px)`;

      /**
       * When the transition ends, remove the transition, move the first element to the end of the
       * slideshow, and remove the transitionend event listener
       */
      const transitionEnd = () => {
        slideShow.current.style.transition = 'none';
        slideShow.current.style.transform = `translateX(0)`;
        slideShow.current.appendChild(firstElement);

        /* It's removing the transitionend event listener. */
        slideShow.current.removeEventListener('transitionend', transitionEnd);
      };

      /* It's adding an event listener to the slideshow that listens for the transitionend event. */
      slideShow.current.addEventListener('transitionend', transitionEnd);
    }
  };

  useEffect(() => {
    setInterval(() => handleSlideShow(), 3000);
  }, []);

  /* It's creating an array of strings that represent the images that will be displayed in the
  slideshow. */
  const scrollImages = [
    'img-1-scroll',
    'img-2-scroll',
    'img-3-scroll',
    'img-4-scroll',
    'img-5-scroll',
  ];

  return (
    <div>
      <div
        ref={slideShow}
        className='flex flex-row justify-center mt-[53px] md:mt-[169px] gap-12 md:gap-[58px] lg:gap-[130px] lg:mt-[188px] w-full'
      >
        {scrollImages.map((scrollImage) => (
          <div
            key={scrollImage}
            className='min-w-[265px] min-h-[132px] md:min-w-[682px] md:min-h-[554px] lg:min-w-[1009px] lg:min-h-[478px] '
          >
            <img
              className=' min-w-full min-h-full object-cover rounded-[30px]'
              src={`${scrollImage}.png`}
              alt='children-playing'
              loading='lazy'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideScreen;
