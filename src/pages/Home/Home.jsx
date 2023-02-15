import { SlideScreen, HeroScreen, VectorScreen } from './components';

const Home = () => {
  return (
    <>
      <VectorScreen />
      <aside className='z-10'>
        <div className='hidden md:flex md:flex-col text-[#7C8CFC] absolute top-[180px] left-20 gap-2'>
          <h1 className=' font-bold text-5xl'>Burbujas de Algodón</h1>
          <p className='font-bold text-xs'>Av. Corrientes 1368, C1043 CABA.</p>
        </div>
        <SlideScreen />
      </aside>
      <main className='flex flex-col justify-center items-center'>
        <HeroScreen />
      </main>
    </>
  );
};

export default Home;
