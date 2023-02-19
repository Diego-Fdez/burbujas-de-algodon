import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import { NavbarScreen, FooterScreen } from './components';
import { Home } from './pages';

function App() {
  return (
    <div className='min-h-screen bg-[#FCFCFC] relative overflow-x-hidden'>
      <BrowserRouter>
        <NavbarScreen />
        <Routes>
          <Route path='/' index element={<Home />} />
        </Routes>
        <FooterScreen />
      </BrowserRouter>
    </div>
  );
}

export default App;
