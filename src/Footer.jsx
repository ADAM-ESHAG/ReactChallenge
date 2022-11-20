//---Get Import font awesome---//

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
    return (
        <footer className="footer">
            <div className="reseaux">
                <a href="#" className='twitter'>
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" className='facebook'>
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#" className='instagram'>
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#" className='github'>
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
        </footer>
    )
}