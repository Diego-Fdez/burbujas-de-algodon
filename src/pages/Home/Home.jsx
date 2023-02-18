import { SlideScreen, HeroScreen, Testimonials } from './components';
import { FigureScreen } from '../../components';
import { topHomeSVG, bottomHomeSVG } from '../../utilities/svgList';

const Home = () => {
  return (
    <>
      <FigureScreen svgElement={topHomeSVG} />
      <aside className='z-10'>
        <div className='hidden md:flex md:flex-col text-[#7C8CFC] absolute top-[180px] left-20 gap-2'>
          <h1 className=' font-bold text-5xl'>Burbujas de Algodón</h1>
          <p className='font-bold text-xs'>Av. Corrientes 1368, C1043 CABA.</p>
        </div>
        <SlideScreen />
      </aside>
      <main className='flex flex-col justify-center items-center relative w-full'>
        <HeroScreen />
        <FigureScreen svgElement={bottomHomeSVG} />
        <Testimonials />
      </main>
    </>
  );
};

export default Home;
