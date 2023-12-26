import React, { useState } from 'react';
import contactanos from '../img/contactanos.png';
import Texto from './general/texto';
import Titulo from './general/titulo';

function Contactanos() {
    
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        Nombre: '',
        Correo: '',
        Telefono: '',
        Mensaje: '',
    });

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    
    const fetchData = async () => {
        try {
            // const response = await axios.get('https://api.example.com/data');
            // Manejar la respuesta del servicio aquí
            // console.log(response.data);
            // Mostrar el modal después de obtener los datos

            console.log(formData);
            setShowModal(true);
        } catch (error) {
        // Manejar errores
        console.error('Error al obtener datos:', error);
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

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
                                <label htmlFor="Nombre" className="form-label color-stic">Nombre*</label>
                                <input id="Nombre" name="Nombre" type="text" className="form-control" placeholder="Nombre" required value={formData.Nombre} onChange={handleChange}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Correo" className="form-label color-stic">Correo*</label>
                                <input id="Correo" name="Correo" type="email" className="form-control" placeholder="Correo electrónico" required value={formData.Correo} onChange={handleChange}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Telefono" className="form-label color-stic">Teléfono*</label>
                                <input id="Telefono" name="Telefono" type="text" className="form-control" placeholder="Teléfono" required value={formData.Telefono} onChange={handleChange}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Mensaje" className="form-label color-stic">Mensaje*</label>
                                <textarea id="Mensaje" name='Mensaje' className="form-control" placeholder="Mensaje" style={{height: 200}} required value={formData.Mensaje} onChange={handleChange}></textarea>
                            </div>
                            <div className="mb-3">
                                <button className="btn btn-principal px-5" type="button" onClick={fetchData}>Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className={`modal fade ${showModal ? 'show' : ''}`} id="confirmModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden={!showModal}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body text-center">
                            <p id="modalConfirmarTitulo" className="stic-subtitle"></p>
                            <p className="stic-subtext">¡Nos estaremos contactando contigo próximamente! {showModal}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contactanos;
