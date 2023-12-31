import whatsapp from '../../img/whatsapp-icon.png';

function FloatingWhatsApp({phoneNumber}) {

    let hrefApiWhatssApp = "https://api.whatsapp.com/send?phone=" + phoneNumber;

    return (
        <div id="whatsapp-button" className="floating-button">
            <a href={hrefApiWhatssApp} target="_blank">
                <img src={whatsapp} />
            </a>
        </div>
    );
}

export default FloatingWhatsApp;
