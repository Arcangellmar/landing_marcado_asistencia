import Titulo from "./titulo";
import ProductosCard from "./productos_card";

import producto_1 from '../producto_1.png';
import producto_2 from '../producto_2.png';
import producto_3 from '../producto_3.png';

function Productos() {
    return (
        <>
            <div className="container text-center py-5">
                <Titulo titulo="Nuestros productos" isUnderLine={true}/>
            </div>
            <div className="container-fluid bg-project-primary">
                <div className="container">
                    <div className="row py-5 text-center g-5">
                        <ProductosCard titulo="Producto 1" subtitulo="Descripcion Producto 1" imagen={producto_1}/>
                        <ProductosCard titulo="Producto 2" subtitulo="Descripcion Producto 2" imagen={producto_2}/>
                        <ProductosCard titulo="Producto 3" subtitulo="Descripcion Producto 3" imagen={producto_3}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Productos;
