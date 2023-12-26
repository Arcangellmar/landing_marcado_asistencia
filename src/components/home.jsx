import 'bootstrap/dist/css/bootstrap.min.css';
import Titulo from './titulo';
import Texto from './texto';
import BotonPrincipal from './boton_principal';

function LandingHome() {
  return (
    <div className="container-fluid landing-home">
        <div className="container text-md-start text-center">
            <div className="row min-vh-100 align-items-center">
                <div className="col-12">
                    <Titulo titulo="Bienvenido a Landing Marcar Asistencia"/>
                    <Texto texto="Proveedor de soluciones tecnológicos"/>
                    
                    <BotonPrincipal texto="Contáctanos"/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LandingHome;
