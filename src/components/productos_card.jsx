import BotonPrincipal from './boton_principal';

function ProductoCard({imagen, titulo, subtitulo}) {
    return (
        <>
            <div className="col-12 col-md-4 mb-5">
                <div className="card" style={{borderRadius: "20px"}}>
                    <img src={imagen} alt="servicio" className="card-img-top" style={{borderRadius: "20px"}}/> 
                    <div className="card-body">
                        <div className="titulo">
                            <p style={{fontSize: 24}}>{titulo}</p>
                        </div>
                        <div className="texto">
                            <p style={{fontSize: 18}}>{subtitulo}</p>
                        </div>
                        <BotonPrincipal texto="Contáctanos"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductoCard;