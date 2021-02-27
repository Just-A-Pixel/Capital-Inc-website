import logo from './logo.svg';
import Navbar from './Navbar';
import Header from './Header'
import About from './About'
import Testimonials from './Testimonials'
import Zoom from 'react-reveal/Zoom';
import Team from './Team';
import Email from './Email';
import './App.css';

function App() {
  return (
    <>
 
    <Navbar /> 
    <Header />
    <br/><br/><br/>
  
      <About />
   
    <br/><br/><br/><br/><br/>
    <Zoom>
      <Testimonials />
    </Zoom>
    <Zoom>
      <Team/>
    </Zoom>
    <Zoom>
      <Email />
    </Zoom>
    </>
  );
}

export default App;
