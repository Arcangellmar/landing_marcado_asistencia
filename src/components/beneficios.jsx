import Titulo from "./titulo";
import BeneficiosCard from "./beneficios_card";

import beneficios_1 from '../beneficios_1.png';
import beneficios_2 from '../beneficios_2.png';

function Beneficios() {
    return (
        <>
            <div className="container text-center py-5">
                <Titulo titulo="Beneficios" isUnderLine={true}/>
                <div className="row py-5">
                    <BeneficiosCard icono={beneficios_1} titulo="Seguridad 100%" descripcion="Siéntete seguro donde sea cuando sea y en todo momento" />
                    <BeneficiosCard icono={beneficios_2} titulo="Cuida lo que más quieres" descripcion="Cuida a tus seres queridos, desde el trabajo, las vacaciones y demás!" />
                </div>
            </div>
        </>
    );
}

export default Beneficios;