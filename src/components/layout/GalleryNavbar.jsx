import { useState } from "react"; 
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'; 

 

const GalleryNavbar = () => { 
  const [navbar, setNavbar] = useState(false); 


  // determina a visibilidade do navbar de acordo com a posição na página
  const showNavbar = () => {
    if(window.scrollY >= 280) {
      setNavbar(true)

    } else {
      setNavbar(false)
    }
  } 
  window.addEventListener('scroll', showNavbar);
 
 
 


  return (
       <> 
          <nav className={navbar ? 'navbar active' : 'navbar'}>
              <div className="navbar__menu"> 
                  <h2 className="navbar__logo" title="Logo | Home"> 
                      <Link to="/">GalleryBay</Link>
                  </h2>
                 
                   <div className="navbar__wrapper">
                      <ul className="navbar__link">
                        <li>
                          <Link to="/about" title="Informações desse site">Sobre o site</Link>
                        </li>    
                        <li title="Bem vindo visitante!" style={{display: 'flex', alignItems: 'center'}}> 
                          <div className="navbar__link--user">
                            <FontAwesomeIcon
                              icon={faUser} 
                            /> 
                          </div>
                        </li>
                      </ul>  
                  </div> 
              </div>
          </nav> 
       </>
  );
};

export default GalleryNavbar;
