import './App.css';
import LandingHome from './components/home';
import Beneficios from './components/beneficios/beneficios';
import Servicios from './components/servicios/servicios';
import Footer from './components/footer';
import Productos from './components/productos/productos';
import Contactanos from './components/contactanos';
import FloatingWhatsApp from './components/general/floating_whatssapp';

function App() {
  return (
    <>
      <LandingHome />
      <Beneficios />
      <Servicios />
      <Productos/>
      <Contactanos />
      <Footer texto="Rolando Zafra"/>
      <FloatingWhatsApp phoneNumber= "51972594901"/>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
