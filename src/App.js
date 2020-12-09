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
            <li className="nav-item"><a href="#y
            " className="nav-link">HOME</a></li>
            <li className="nav-item"><a href="#ARTWORKS" className="nav-link">ARTWORKS</a></li>
            <li className="nav-item"><a href="#CONTACT" className="nav-link">CONTACT</a></li>
          </ul>
        </nav>
      </header>

      <section id="main">
        <h1 id="main-title">JDRT's Gallery</h1>

        <section id="ARTWORKS">
          <Artwork title="ALAVERG!" image={alaverg} altmsg="JDRT ALAVERG! art"/>
          <Artwork title="24 KARAT" image={karat24} altmsg="JDRT 24 karat art"/>
          <Artwork title="JMELO" image={jmelo} altmsg="JDRT JMELO art"/>
          <Artwork title="ELON MASK 01" image={elonmask01} altmsg="JDRT ELON MASK 01 art"/>
          <Artwork title="ELON MASK 02" image={elonmask02} altmsg="JDRT ELON MASK 02 art"/>
          <Artwork title="THE FACE MASK" image={thefacemask} altmsg="JDRT THE FACE MASK art"/>
          <Artwork title="COOKS' KEYS" image={cookie} altmsg="JDRT COOKS' KEYS art"/>
          <Artwork title="JOSE MANUEL CEDENO" image={jmc} altmsg="JDRT JOSE MANUEL CEDENO art"/>
          <Artwork title="JOSE DAVID CEDENO" image={jdc} altmsg="JDRT JOSE DAVID CEDENO art"/>
          <Artwork title="MANUEL CEDENO" image={mc} altmsg="JDRT MANUEL CEDENO art"/>
          <Artwork title="COGNA!" image={cogna} altmsg="JDRT COGNA! art"/>
          <Artwork title="BOCETO" image={boceto} altmsg="JDRT BOCETO art"/>
          <Artwork title="JDRT FACES 01" image={jdrtfaces01} altmsg="JDRT FACES 01 art"/>
          <Artwork title="JDRT FACES 02" image={jdrtfaces02} altmsg="JDRT FACES 02 art"/>
          <Artwork title="JDRT FACES 03" image={jdrtfaces03} altmsg="JDRT FACES 03 art"/>
          <Artwork title="COLIBRI" image={colibri} altmsg="JDRT COLIBRI art"/>
          <Artwork title="MONKEY BUSINESS" image={monkeybusiness} altmsg="JDRT MONKEY BUSINESS art"/>
          <Artwork title="GAMABUNTA" image={gamabunta} altmsg="JDRT GAMABUNTA art"/>
          <Artwork title="GIRAFFE" image={giraffe} altmsg="JDRT GIRAFFE art"/>
          <Artwork title="ZEBRA" image={zebra} altmsg="JDRT ZEBRA art"/>
          <Artwork title="MOTHER BIRD" image={motherbird} altmsg="JDRT MOTHER BIRD art"/>
          <Artwork title="SURREAL BOAT" image={surrealboat} altmsg="JDRT SURREAL BOAT art"/>
          <Artwork title="COUPLES THERAPY" image={couplestherapy} altmsg="JDRT COUPLES THERAPY art"/>
          <Artwork title="ANTIPATHY" image={antipathy} altmsg="JDRT ANTIPATHY art"/>
          <Artwork title="TOILET MEDITATION" image={toiletmeditation} altmsg="TOILET MEDITATION"/>
        </section>

        <section id="CONTACT">
          <h3>CONTACT</h3>
          <h4>jdrt.art@gmail.com</h4>
        </section>
      </section>
      
    </div>
  );
}

export default App;
