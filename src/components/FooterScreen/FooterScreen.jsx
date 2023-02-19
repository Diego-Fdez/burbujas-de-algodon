const FooterScreen = () => {
  return (
    <footer
      className={`relative flex lg:flex-row lg:mt-[1099px] w-full lg:h-[343px] lg:border-t-4 
			lg:border-solid lg:border-[#7C8CFC]`}
    >
      {/* left side */}
      <div className='flex lg:flex-row h-full'>
        <div className='flex lg:flex-col h-full'>
          <h4
            className={`absolute font-bold lg:text-2xl text-[#7C8CFC] lg:mt-12 lg:left-10`}
          >
            Burbujas de Algodón
          </h4>
          <a className={`absolute lg:top-[88px] lg:left-[110px]`} href='/'>
            <img
              src='/logo 1.png'
              alt='logo-burbujas-de-algodon'
              loading='lazy'
              className={`lg:w-[104px] lg:h-24`}
            />
          </a>
        </div>
        <div>
          <h5
            className={`absolute font-bold text-[#7C8CFC] lg:text-lg lg:top-12 lg:left-[476px]`}
          >
            Nuestras redes
          </h5>
          <div className='flex flex-col'>
            <a className={`absolute lg:top-24 lg:left-[416px]`} href='/'>
              <img
                src='/facebook-icon.png'
                alt='facebook-logo'
                loading='lazy'
                className={`lg:w-[62px] lg:h-[50px]`}
              />
            </a>
            <a className={`absolute lg:top-[99px] lg:left-[525px]`} href='/'>
              <img
                src='/twitter-logo.png'
                alt='twitter-logo'
                loading='lazy'
                className={`lg:w-[45px] lg:h-[44px]`}
              />
            </a>
            <a className={`absolute lg:top-[99px] lg:left-[615px]`} href='/'>
              <img
                src='/instagram-logo.png'
                alt='instagram-logo'
                loading='lazy'
                className={`lg:w-[46px] lg:h-[44px]`}
              />
            </a>
          </div>
        </div>
      </div>
      {/* right side */}
      <div>
        <div>
          <h5
            className={`absolute font-bold text-[#7C8CFC] lg:text-lg lg:top-12 lg:left-[822px]`}
          >
            Contacténos
          </h5>
          <div className={`font-light lg:text-xs text-[#7C8CFC]`}>
            <p className={`absolute lg:top-[75px] lg:left-[822px]`}>
              burbujasdealgodon@aol.com.ar
            </p>
            <p className={`absolute lg:top-[98px] lg:left-[822px]`}>
              Av. Corrientes 1368, C1043 CABA.Arg.
            </p>
            <p className={`absolute lg:top-[119px] lg:left-[822px]`}>
              +549-11-56733830
            </p>
            <p className={`absolute lg:top-[140px] lg:left-[822px]`}>
              +549-11-56733831
            </p>
          </div>
        </div>
        <div>
          <h5
            className={`absolute font-bold text-[#7C8CFC] lg:text-lg lg:top-12 lg:left-[1106px]`}
          >
            Suscribete
          </h5>
          <p
            className={`absolute lg:top-[81px] lg:left-[1106px] font-light lg:text-xs text-[#7C8CFC]
						lg:w-[294px] lg:h-7`}
          >
            Ingresa tu mail para estar al tanto de todas nuestras novedades y
            actividades para compartir.
          </p>
          <div>
            <input
              type='email'
              placeholder='Mail'
              className={`absolute flex flex-row lg:gap-[65px] lg:w-[207px] lg:h-[34px] items-end lg:pt-0 
							lg:pr-[19px] lg:pb-[5px] lg:pl-3 lg:left-[1109px] lg:top-[133px] lg:rounded-[30px] 
							border-[1px] border-solid border-[#7C8CFC] bg-[rgba(255, 255, 255, 0.8)]
							focus:border-[#7C8CFC] focus:ring-1 focus:outline-none placeholder:text-[#7C8CFC]
							placeholder:text-xs placeholder:font-bold`}
            />
            <svg
              className={`absolute lg:top-[142px] lg:left-[1281.92px]`}
              width='21'
              height='16'
              viewBox='0 0 21 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M2.83317 16C2.30609 16 1.85503 15.8043 1.48 15.413C1.10434 15.021 0.916504 14.55 0.916504 14V2C0.916504 1.45 1.10434 0.979333 1.48 0.588C1.85503 0.196 2.30609 0 2.83317 0H18.1665C18.6936 0 19.145 0.196 19.5206 0.588C19.8957 0.979333 20.0832 1.45 20.0832 2V14C20.0832 14.55 19.8957 15.021 19.5206 15.413C19.145 15.8043 18.6936 16 18.1665 16H2.83317ZM10.4998 9L2.83317 4V14H18.1665V4L10.4998 9ZM10.4998 7L18.1665 2H2.83317L10.4998 7ZM2.83317 4V2V14V4Z'
                fill='#7C8CFC'
              />
            </svg>
          </div>
        </div>
      </div>
      <a href='/'>
        <img
          src='/whatsapp-icon.png'
          alt='whatsapp-logo'
          loading='lazy'
          className={`absolute lg:w-[95px] lg:h-[95px] lg:top-[218px] lg:left-[1315px]`}
        />
      </a>
    </footer>
  );
};

export default FooterScreen;
