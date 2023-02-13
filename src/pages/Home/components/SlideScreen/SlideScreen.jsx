const SlideScreen = () => {
  const scrollImages = [
    'img-1-scroll',
    'img-2-scroll',
    'img-3-scroll',
    'img-4-scroll',
  ];

  return (
    <div className='flex flex-row mt-[53px] md:mt-[169px] gap-12 md:gap-[58px] lg:gap-[130px] lg:mt-[188px]'>
      {scrollImages.map((scrollImage) => (
        <img
          key={scrollImage}
          className='w-[265px] h-[132px] md:w-[882px] md:h-[554px] rounded-[30px] lg:w-[1009px] lg:h-[478px]'
          src={`${scrollImage}.png`}
          alt='children-playing'
          loading='lazy'
        />
      ))}
    </div>
  );
};

export default SlideScreen;
