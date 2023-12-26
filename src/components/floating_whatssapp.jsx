import whatsapp from '../whatsapp-icon.png';

function FloatingWhatsApp({phoneNumber}) {

    let hrefApiWhatssApp = "https://api.whatsapp.com/send?phone=" + phoneNumber;

    return (
        <div id="whatsapp-button" class="floating-button">
            <a href={hrefApiWhatssApp} target="_blank">
                <img src={whatsapp} />
            </a>
        </div>
    );
}

export default FloatingWhatsApp;