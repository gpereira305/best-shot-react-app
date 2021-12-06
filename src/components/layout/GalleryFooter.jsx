import React from "react"; 
import { FaLinkedin, FaGithub } from 'react-icons/fa';



const GalleryFooter = () => {
  // busca pela data atual automaticamente
 const todayDate = new Date().getFullYear();

  return (
    <footer className="footer">
         <div className="footer__links"> 
          <a href="https://github.com/gpereira305" target="_blank" rel="noopener noreferrer" title="Ir para Github"><FaGithub/></a>
          <a href="https://www.linkedin.com/in/giovane-pereira" target="_blank" rel="noopener noreferrer" title="Ir para Linkedin"><FaLinkedin/></a> 
        </div>
        <div className="footer__copy">
            <small>&copy; {todayDate} | Todos os direitos reservados</small> 
            <small 
              style={{ color: 'grey', fontSize: '10px'}}>
                Faça uma visita ao {''}
              <a href="https://pixabay.com/" target="_blank" rel="noopener noreferrer">Pixabay</a>
            </small>
        </div>
    </footer>
  );
};

export default GalleryFooter;
