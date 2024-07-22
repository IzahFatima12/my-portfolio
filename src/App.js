import './App.css';
import { NavBar } from './components/NavBar';
import {Banner} from './components/Banner';
import { Skills } from './components/Skills';
import {Project} from './components/Project';
import { Contact } from './components/Contact';
import { Footer } from './components/footer';

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Project/>
      <Contact/>
    
   <Footer/>
    </div>
  );
}

export default App;
