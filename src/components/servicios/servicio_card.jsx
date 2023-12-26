function ServicioCard({srcImage, titulo, subtitulo, secondRow}) {

    let widget = srcImage 
        ? <img src={srcImage} alt="servicio" className="w-100 img-fluid" /> 
        : <>
            <p className="titulo text-white">{titulo}</p>
            <p className="texto text-white">{subtitulo}</p>
        </>;

    let classNameLocal = srcImage 
        ? ("col-12 col-md-6 p-0 well" + (secondRow === true ? " order-md-2 order-1" : "")) 
        : ("col-12 col-md-6 bg-project-primary d-flex flex-column justify-content-center well" + (secondRow === true ? " order-md-1 order-2" : ""));

    return (
        <>
            <div className={classNameLocal}>
                {widget}
            </div>
        </>
    );
}

export default ServicioCard;
