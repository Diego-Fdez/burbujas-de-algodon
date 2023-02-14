const NavbarScreen = () => {
  return (
    <header className='flex items-center justify-between w-full h-32 bg-[#FCFCFC] py-2 relative'>
      <div className='relative w-full h-full'>
        <div className='flex flex-col justify-center items-center absolute left-6 top-8'>
          <a href='/'>
            <img
              className='w-[125px] h-[100px]'
              src='/logo 1.png'
              alt='logo-burbujas-de-algodon'
            />
          </a>
          <p className='font-extrabold text-xs text-[#4454F4]'>Since 1992</p>
        </div>
      </div>
      <nav className='mt-[67px] mx-[38px] hidden lg:flex items-center w-8 h-12 md:w-full md:h-full'>
        <ul className='flex md:flex-row items-center justify-between md:gap-[102px] font-bold text-2xl text-[#7C8CFC]'>
          <li className='p-[10px] hover:text-white hover:bg-[#7C8CFC] rounded-2xl transition-all'>
            <a href='/'>Salas</a>
          </li>
          <li className='p-[10px] hover:text-white hover:bg-[#7C8CFC] rounded-2xl transition-all'>
            <a href='/'>Nosotros</a>
          </li>
          <li className='p-[10px] hover:text-white hover:bg-[#7C8CFC] rounded-2xl transition-all'>
            <a href='/'>Actividades</a>
          </li>
          <li className='p-[10px] hover:text-white hover:bg-[#7C8CFC] rounded-2xl transition-all'>
            <a href='/'>Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavbarScreen;
