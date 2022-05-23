
import './App.css';
import Animation from './components/Animation';
import Navigation from './components/Navigation';
import Flip from './components/Flip';
import Slide from './components/Slide';
import Zoom from './components/Zoom';
import Render from './components/Render';
import Advance from './components/Advance';
import Testimonial from './components/Testimonial';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";







function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
      
        <Route path='/' element={<Animation />} />
        <Route path='/flip' element={<Flip />} />
        <Route path='/slide' element={<Slide />} />
        <Route path='/zoom' element={<Zoom />} />
        <Route path='/render' element={<Render/>} />
        <Route path='/advance' element={<Advance/>} />
        <Route path='/testimonial' element={<Testimonial/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
