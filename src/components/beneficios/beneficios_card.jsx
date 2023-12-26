import BotonPrincipal from '../general/boton_principal';

function BeneficiosCard({icono, titulo, descripcion}) {
    return (
        <>
            <div className="col-12 col-md-6">
                <div className="row">
                    <div className="col-12 text-center py-5">
                        <img src={icono} className="App-logo" alt="logo" />
                    </div>
                    <div className="col-12 text-center">
                        <h5 className="beneficios-title">{titulo}</h5>
                    </div>
                    <div className="col-12 text-center">
                        <p className="beneficios-text">{descripcion}</p>
                    </div>
                    <div className="col-12 text-center">
                        <BotonPrincipal texto="Contáctanos"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BeneficiosCard;
