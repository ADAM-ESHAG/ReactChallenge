
import laura from "/images/laura.png"
// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
    return (
      <div className='header'>
        <div className='laura-image'>
          <img src={laura} alt="Laura-image" />
        </div>
        <div className='profil-name'>
          <h1>Laura Smith</h1>
          <h4>Frontend Developer</h4>
          <p>
            <a href="#">laurasmith.website</a>
          </p>
        </div>
        <div className='contact'>
          <div className='email'>
            <button>
              <FontAwesomeIcon icon={faEnvelope} className= "fontemail"/>Email
            </button>
          </div>
          <div className='linkedin'>
            <button>
              <FontAwesomeIcon icon={faLinkedin} className= "fontLinkedin"/>Linkedin
            </button>
          </div>
        </div>
      </div>
    )
  } 