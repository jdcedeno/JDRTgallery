import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import karat24 from './img/24KARAT.jpg';
import alaverg from './img/ALAVERG.png';
import antipathy from './img/antipathy.jpg';

function App() {
  return (
    <div className="App">
      <h1>JDRT's Gallery</h1>
      <h2>24 KARAT</h2>
      <img src={karat24} alt="JDRT 24 karat art"/>
      <h2>ALAVERG!</h2>
      <img src={alaverg} alt="JDRT ALAVERG art"/>
      <h2>ANTIPATHY</h2>
      <img src={antipathy} alt="JDRT antipathy art"/>
    </div>
  );
}

export default App;
