import contactanos from '../contactanos.png';
import Texto from './texto';
import Titulo from './titulo';

function Contactanos() {
    return (
        <>
            <div className="container-fluid" id="Contactanos">
                <div className="row min-vh-100 align-items-center">
                    <div className="col-md-6 p-0 d-md-block d-none">
                        <img className="min-vh-100 w-100 img-fluid" src={contactanos} />
                    </div>
                    <div className="col-md-6 p-5">
                        <div className='text-md-start text-center'>
                            <Titulo titulo="Contáctanos" isUnderLine={false}/>
                            <Texto texto="Completando este formulario podremos comunicarnos contigo!"/>
                        </div>

                        <form>
                            <div className="mb-3">
                                <label for="Nombres" className="form-label color-stic">Nombre*</label>
                                <input id="Nombres" type="text" class="form-control" placeholder="Nombre" required />
                            </div>
                            <div className="mb-3">
                                <label for="Correo" className="form-label color-stic">Correo*</label>
                                <input id="Correo" type="email" class="form-control" placeholder="Correo electrónico" required />
                            </div>
                            <div className="mb-3">
                                <label for="Telefono" className="form-label color-stic">Teléfono*</label>
                                <input id="Telefono" type="text" class="form-control" placeholder="Teléfono" required />
                            </div>
                            <div className="mb-3">
                                <label for="Mensaje" className="form-label color-stic">Mensaje*</label>
                                <textarea id="Mensaje" class="form-control" placeholder="Mensaje" style={{height: 200}} required></textarea>
                            </div>
                            <div className="mb-3">
                                <button class="btn btn-principal px-5" type="button" onclick="Enviar()">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contactanos;
