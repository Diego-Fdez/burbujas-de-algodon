const HeroScreen = () => {
  return (
    <article>
      <div className='flex flex-row items-center justify-center w-[1122px] h-[411px] mt-[218px] rounded-[30px] relative shadow-2xl mb-6'>
        <div className='w-[759px] h-full'>
          <img
            className='w-full h-full object-contain'
            src='/img-Call-to-action.png'
            alt='call-to-action'
            loading='lazy'
          />
        </div>
        <div className='flex flex-col justify-center items-center w-[363px] h-full bg-white mt-0 relative rounded-r-[30px]'>
          <h5 className='text-2xl font-bold text-black absolute left-[59px] top-[35px]'>
            Burbujas de Algodón
          </h5>
          <hr className='w-[247px] h-[2px] border-black text-black absolute left-[59px] top-[66px]' />
          <h6 className='text-lg text-black font-bold mt-10 absolute top-20 left-[37px]'>
            El espacio ideal para tus peques
          </h6>
          <div className='w-[260px] h-[154px] absolute top-[154px] left-[53px]'>
            <p className='text-xs font-light text-black mt-[29px]'>
              Si quieres saber más sobre nosotros, nuestros métodos disruptivos
              de enseñanza comprobados, nuestro Staff docente y cualquier duda
              que te surja, háblanos! Vamos a conocernos y veremos juntos que
              este jardín es un increíble lugar para que peque tenga su primer
              acercamiento a la educación formal. ¡Te esperamos!
            </p>
          </div>
          <button className='flex flex-row gap-[10px] justify-start items-center w-[269px] h-[69px] rounded-[30px] pt-[25px] pr-0 pb-6 pl-[63px] bg-[#7C8CFC] text-white font-bold text-2xl absolute left-[53px] top-[326px] hover:bg-[#4454F4] transition-all'>
            Contáctenos
          </button>
        </div>
      </div>
      <div></div>
    </article>
  );
};

export default HeroScreen;
