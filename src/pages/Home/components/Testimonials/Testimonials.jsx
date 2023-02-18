const Testimonials = () => {
  return (
    <article className={`flex lg:flex-col relative lg:mt-[62px] w-full`}>
      <h2 className={`lg:text-[40px] font-bold text-black text-center`}>
        Nuestras reseñas en Google
      </h2>
      {/* left side */}
      <div className='flex relative'>
        <div
          className={`absolute lg:w-[514px] lg:h-[251px] bg-white lg:rounded-[50px] lg:left-[72px] 
          lg:top-[156px] shadow-2xl`}
        >
          <div className='flex relative w-full h-full'>
            <img
              src='/img-avatar-1.png'
              alt='Marisa-avatar'
              loading='lazy'
              className={`absolute lg:w-[100px] lg:h-[112.9px] lg:left-[218px] lg:-top-24`}
            />
            <h4
              className={`absolute font-bold lg:text-2xl text-black lg:left-12 lg:top-2`}
            >
              Marisa
            </h4>
            <h4
              className={`absolute font-normal font-melody lg:text-[24px] lg:leading-[30px] text-black
              lg:w-[299px] lg:h-[200px] lg:left-[131px] lg:top-9`}
            >
              &#34;Conocí el lugar por medio de amigas en común y amé desde el
              primer día la atención a los detalles, la excelente predisposición
              de los directivos y el equipo docente. Cuando entro mi hija pilar,
              lo comprobé era el lugar para ella.&#34;
            </h4>
          </div>
        </div>
        <div
          className={`absolute lg:w-[514px] lg:h-[251px] bg-white lg:rounded-[50px] lg:left-[72px] 
          lg:top-[569px] shadow-2xl`}
        >
          <div className='flex relative w-full h-full'>
            <img
              src='/img-avatar-3.png'
              alt='Jean-Pierre-avatar'
              loading='lazy'
              className={`absolute lg:w-[100px] lg:h-[112.9px] lg:left-[218px] lg:-top-24`}
            />
            <h4
              className={`absolute font-bold lg:text-2xl text-black lg:left-12 lg:top-2`}
            >
              Jean-Pierre
            </h4>
            <h4
              className={`absolute font-normal font-melody lg:text-[24px] lg:leading-[30px] text-black
              lg:w-[299px] lg:h-[173px] lg:left-[131px] lg:top-[46px]`}
            >
              &#34;Con mi esposa siempre nos gustó Burbujas, pero al enterarnos
              que utilizaban una APP. para organizarse internamente los horarios
              y actividades de los niños, eso nos convenció al 100%.&#34;
            </h4>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className='flex relative'>
        <div
          className={`absolute lg:w-[514px] lg:h-[251px] bg-white lg:rounded-[50px] lg:left-[744px] 
          lg:top-[345px] shadow-2xl`}
        >
          <div className='flex relative w-full h-full'>
            <img
              src='/img-avatar-2.png'
              alt='Marisa-avatar'
              loading='lazy'
              className={`absolute lg:w-[100px] lg:h-[112.9px] lg:left-[218px] lg:-top-24`}
            />
            <h4
              className={`absolute font-bold lg:text-2xl text-black lg:left-12 lg:top-2`}
            >
              Enrique
            </h4>
            <h4
              className={`absolute font-normal font-melody lg:text-[24px] lg:leading-[30px] text-black
              lg:w-[299px] lg:h-[173px] lg:left-[131px] lg:top-9`}
            >
              &#34;Estaba buscando por Google y analizando los comentarios de
              los jardines y este me pareció; con una excelente propuesta y una
              comunidad muy conforme, eso me hizo decidirme al incluir a mi
              hija.&#34;
            </h4>
          </div>
        </div>
        <div
          className={`absolute lg:w-[514px] lg:h-[251px] bg-white lg:rounded-[50px] lg:left-[774px] 
          lg:top-[776px] shadow-2xl`}
        >
          <div className='flex relative w-full h-full'>
            <img
              src='/img-avatar-4.png'
              alt='Jean-Pierre-avatar'
              loading='lazy'
              className={`absolute lg:w-[100px] lg:h-[112.9px] lg:left-[218px] lg:-top-24`}
            />
            <h4
              className={`absolute font-bold lg:text-2xl text-black lg:left-12 lg:top-2`}
            >
              Paula
            </h4>
            <h4
              className={`absolute font-normal font-melody lg:text-[24px] lg:leading-[30px] text-black
              lg:w-[299px] lg:h-[200px] lg:left-[127px] lg:top-[31px]`}
            >
              &#34;Que mi hijo Ramses tenga la mejor educación es lo que mas
              moviliza, al ver que el Staff docente esta tan capacitado, me
              siento muy cómoda enviando a mi hijo a un lugar donde nunca se
              aburre, como el me contaba anteriormente..&#34;
            </h4>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Testimonials;
