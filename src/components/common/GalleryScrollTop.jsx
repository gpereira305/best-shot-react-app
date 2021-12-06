import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';

const GalleryScrollTop = () => {
   const [visible, setVisible] = useState(false);

   // determina a posisão em que o scroll icon irá aparecer na página
   const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };

   //  comportamento do scroll icon setado para suave
    const scrollTopPage = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth' 
      });
    };
    
   //  deixa o scroll icon visível na página
    window.addEventListener('scroll', toggleVisible);

   return (
      <div className="scroll-top">
         <FontAwesomeIcon
           icon={faChevronCircleUp}
           onClick={scrollTopPage} 
           style={{display: visible ? 'inline' : 'none'}} 
           title="Voltar ao topo da página" 
         />
      </div>
   )
}

export default GalleryScrollTop;
