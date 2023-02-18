import { information } from '../../../../utilities/infoList';

const HeroScreen = () => {
  return (
    <article className='z-10 flex flex-col items-center justify-center'>
      <div
        className={`flex flex-row items-center justify-center lg:w-[1122px] lg:h-[392px] lg:mt-[218px] rounded-[30px] 
      relative shadow-2xl`}
      >
        <div className='lg:w-[759px] h-full'>
          <img
            className='w-full h-full object-contain'
            src='/img-Call-to-action.png'
            alt='call-to-action'
            loading='lazy'
          />
        </div>
        <div
          className={`flex flex-col justify-center items-center lg:w-[417px] h-full bg-white 
        lg:-mt-6 relative rounded-r-[30px]`}
        >
          <h3
            className={`lg:text-[32px] font-bold text-black absolute lg:left-[48px] lg:top-[42px]`}
          >
            Burbujas de Algodón
          </h3>
          <hr
            className={`lg:w-[320px] h-[3px] border-black text-black absolute lg:left-[51px] lg:top-[85px]`}
          />
          <h5
            className={`lg:text-lg text-black font-bold lg:mt-10 absolute lg:top-[94px] lg:left-[72px]`}
          >
            El espacio ideal para tus peques
          </h5>
          <div className='lg:w-[260px] lg:h-[158px] absolute lg:top-[151px] lg:left-[88px]'>
            <p className='text-xs font-light text-black lg:mt-[29px]'>
              Si quieres saber más sobre nosotros, nuestros métodos disruptivos
              de enseñanza comprobados, nuestro Staff docente y cualquier duda
              que te surja, háblanos! Vamos a conocernos y veremos juntos que
              este jardín es un increíble lugar para que peque tenga su primer
              acercamiento a la educación formal. ¡Te esperamos!
            </p>
          </div>
          <button
            className={`flex flex-row lg:gap-[10px] justify-start items-center lg:w-[269px] lg:h-[69px] 
          rounded-[30px] lg:pt-[25px] lg:pr-0 lg:pb-6 lg:pl-[63px] bg-[#7C8CFC] text-white font-bold 
          lg:text-2xl absolute lg:left-[83px] lg:top-[326px] hover:bg-[#4454F4] transition-all`}
          >
            Contáctenos
          </button>
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center w-full lg:gap-[47px]'>
        {information.map((info) => (
          <div
            key={info.id}
            className={`flex flex-row md:flex-col lg:w-[400px] lg:h-[475px] bg-white
          relative rounded-[30px] md:mt-[203px] shadow-2xl`}
          >
            <div className={`lg:w-[400px] lg:h-[475px] relative`}>
              <img
                src='/img-info.png'
                alt='pencils'
                loading='lazy'
                className={`lg:w-[400px] lg:h-[${info.height}px]
              absolute left-0 top-[${info.top}px] ${info.rotate} rounded-${info.radius}-[30px]`}
              />
              <h3
                className={`font-bold md:text-[32px] text-[#1A1717] absolute lg:left-[33px] lg:top-[221px]`}
              >{`Info ${info.id}`}</h3>
              <div
                className={`absolute lg:w-[335px] lg:h-[115px] lg:left-[33px]
              lg:top-[292px]`}
              >
                <p className={`font-bold text-xs text-black`}>
                  {info.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default HeroScreen;
