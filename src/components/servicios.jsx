import Titulo from "./titulo";
import ServicioCard from "./servicio_card"

import servicio_1 from '../servicio_1.png';
import servicio_2 from '../servicio_2.png';

function Servicios() {
    return(
        <>
            <div className="container text-center py-5">
                <Titulo titulo="Servicios" isUnderLine={true}/>
            </div>
            <div className="container-fluid">
                <div className="row py-5 text-center">
                    <ServicioCard srcImage={servicio_1} secondRow={false}/>
                    <ServicioCard titulo="Registro continuo" subtitulo="Control de asistencia del personal" secondRow={false}/>
                    <ServicioCard titulo="Mantenimiento constante" subtitulo="La aplicación se actualiza periodicamente" secondRow={true}/>
                    <ServicioCard srcImage={servicio_2} secondRow={true}/>
                </div>
            </div>
        </>
    );
}

export default Servicios;
