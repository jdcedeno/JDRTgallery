import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import alaverg from './img/.ALAVERG.png';
import alaverghand from './img/alaverghand.png';
import antipathy from './img/antipathy.jpg';
import colibri from './img/colibri.jpg';
import couplestherapy from './img/couplestherapy.jpg';
import gamabunta from './img/gamabunta.jpg';
import giraffe from './img/giraffe.jpg';
import jdc from './img/jdc.jpg';
import jmc from './img/jmc.jpg';
import mc from './img/mc.jpg';
import monkeybusiness from './img/monkeybusiness.jpg';
import motherbird from './img/motherbird.jpg';
import surrealboat from './img/surrealboat.jpg';
import toiletmeditation from './img/toiletmeditation.jpg';
import zebra from './img/zebra.jpg';

function App() {
  return (
    <div className="App">
      <h1>JDRT's Gallery</h1>
      <h2>.ALAVERG!</h2>
      <img src={alaverg} alt="jdrt new painting"/>
      <h2>.ALAVERG handmade sketch</h2>
      <img src={alaverghand} alt="jdrt new sketch" />
      <h2>Antipathy</h2>
      <img src={antipathy} alt="jdrt old painting 2" />
      <h2>Colibri</h2>
      <img src={colibri} alt="jdrt old painting 3" />
      <h2>Couples Therapy</h2>
      <img src={couplestherapy} alt="jdrt old painting 4" />
      <h2>Gamabunta</h2>
      <img src={gamabunta} alt="jdrt old painting 5" />
      <h2>Giraffe</h2>
      <img src={giraffe} alt="jdrt old painting 6" />
      <h2>JDC!</h2>
      <img src={jdc} alt="jdrt family collection 1" />
      <h2>JMC!</h2>
      <img src={jmc} alt="jdrt family collection 2" />
      <h2>MC!</h2>
      <img src={mc} alt="jdrt family collection 3" />
      <h2>Monkey Business</h2>
      <img src={monkeybusiness} alt="jdrt old painting 10" />
      <h2>Mother Bird</h2>
      <img src={motherbird} alt="jdrt old painting 11" />
      <h2>Surreal Boat</h2>
      <img src={surrealboat} alt="jdrt old painting 12" />
      <h2>Toilet Meditation</h2>
      <img src={toiletmeditation} alt="jdrt old painting 13" />
      <h2>Zebra</h2>
      <img src={zebra} alt="jdrt old painting 14" />
    </div>
  );
}

export default App;
