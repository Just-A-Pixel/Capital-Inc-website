import logo from './logo.svg';
import Navbar from './Navbar';
import Header from './Header'
import About from './About'
import Testimonials from './Testimonials'
import Zoom from 'react-reveal/Zoom';
import Team from './Team';
import './App.css';

function App() {
  return (
    <>
 
    <Navbar /> 
    <Header />
    <br/><br/><br/>
    <Zoom>
      <About />
    </Zoom>
    <br/><br/><br/><br/><br/>
    <Zoom>
      <Testimonials />
    </Zoom>
    <Zoom>
      <Team/>
    </Zoom>
    </>
  );
}

export default App;
