import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import { NavbarScreen } from './components';
import { Home } from './pages';

function App() {
  return (
    <div className='min-h-screen bg-[#FCFCFC]'>
      <BrowserRouter>
        <NavbarScreen />
        <Routes>
          <Route path='/' index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
