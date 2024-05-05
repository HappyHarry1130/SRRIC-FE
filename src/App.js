
import './App.css';
import Headerindex from './components/welcome/header/headerindex';

import { Route, Routes } from 'react-router-dom';
import About from './pages/about';
import Welcom from './pages/Welcome/index'
import Welcom1 from './components/welcome/index';

function App() {
  return (
    <div className='body'>
      <Headerindex/>
      <Routes> 
            <Route path='/' element ={<Welcom1/>}/>
            <Route path="/about" element={<About/>}  /> 
      </Routes>
    </div>
  );
}

export default App;
