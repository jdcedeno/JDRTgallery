import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Artwork from './components/Artwork'

import karat24 from './img/24KARAT.jpg';
import alaverg from './img/ALAVERG.png';
import antipathy from './img/antipathy.jpg';
import boceto from './img/BOCETO.jpg'
import cogna from './img/COGNA.jpg'
import colibri from './img/colibri.jpg'
import cookie from './img/COOKIE.jpg'
import couplestherapy from './img/COUPLES THERAPY.jpg'
import elonmask01 from './img/ELON MASK 01.jpg'
import elonmask02 from './img/ELON MASK 02.png'
import gamabunta from './img/gamabunta.jpg'
import giraffe from './img/giraffe.jpg'
import jdc from './img/jdc.jpg'
import jdrtfaces01 from './img/jdrtfaces01.png'
import jdrtfaces02 from './img/jdrtfaces02.png'
import jdrtfaces03 from './img/jdrtfaces03.png'
import jmc from './img/jmc.jpg'
import jmelo from './img/JMELO.jpg'
import mc from './img/mc.jpg'
import monkeybusiness from './img/MONKEY BUSINESS.jpg'
import motherbird from './img/MOTHER BIRD.jpg'
import surrealboat from './img/SURREAL BOAT.jpg'
import thefacemask from './img/THEFACEMASK.jpg'
import toiletmeditation from './img/TOILET MEDITATION.jpg'
import zebra from './img/zebra.jpg'

function App() {
  return (
    <div className="App">
      <header id="header-nav">
        <nav className="navbar">
          <ul className="nav-items-row">
            <li className="nav-item"><a href="#" className="nav-link">HOME</a></li>
            <li className="nav-item"><a href="#ARTWORKS" className="nav-link">ARTWORKS</a></li>
            <li className="nav-item"><a href="#CONTACT" className="nav-link">CONTACT</a></li>
          </ul>
        </nav>
      </header>

      <section id="main">
        <h1>JDRT's Gallery</h1>

        <section id="ARTWORKS">
          <Artwork />
          <h2>24 KARAT</h2>
          <img src={karat24} alt="JDRT 24 karat art"/>
          <h2>ALAVERG!</h2>
          <img src={alaverg} alt="JDRT ALAVERG art"/>
          <h2>ANTIPATHY</h2>
          <img src={antipathy} alt="JDRT antipathy art"/>
          <h2>BOCETO</h2>
          <img src={boceto} alt="JDRT BOCETO art"/>
        </section>

        <section id="CONTACT">
          <h2>CONTACT</h2>
        </section>
      </section>
      
    </div>
  );
}

export default App;
