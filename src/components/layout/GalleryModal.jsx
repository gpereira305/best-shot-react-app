import { useState } from "react"; 
import { saveAs } from 'file-saver'
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
   faCamera, 
   faCloudDownloadAlt, 
   faComments, faDownload, 
   faExternalLinkAlt, faEye,  
   faHashtag,  faImage,  
   faThumbsUp 
} from '@fortawesome/free-solid-svg-icons'; 






const GalleryModal = ({open,  setOpen, showImage, props }) => { 
   const [downloadImg, setDownloadImg] = useState(false);  
    
 
   //  executa o download da imagem aós o clique
   const onDownload = (e) => {  
       saveAs(showImage.largeImageURL);
       setDownloadImg(true); 
    };
 

   return ( 
       <>  
         <Modal 
            keyboard={false} 
            show={open} onHide={() => setOpen(false)}
            {...props}  size="lg"  
            aria-labelledby="contained-modal-title-vcenter"  
            centered>
          {/*++++ modal header ++++++*/}
         <Modal.Header closeButton></Modal.Header> 
 
          {/*++++ modal body ++++++*/}
          <Modal.Body>  
              <img className="w-full" src={showImage.webformatURL} alt="images" /> 
          </Modal.Body> 


           {/*++++ modal footer ++++++*/}
            <Modal.Footer>  
               <div className="modal-footer__download">
                  <h6>Fazer download dessa imagem</h6>
                  <div  className="modal-footer__download--icon" onClick={() => onDownload(downloadImg)}>
                     <FontAwesomeIcon 
                        icon={faDownload}
                        title="Baixar essa imagem em alta qualidade"
                     /> 
                  </div> 
               </div> 
 
               <ul className="modal-footer__download--list"> 
                 <span>
                     <li title="Total de likes dessa imagem"> 
                        <FontAwesomeIcon 
                          icon={faThumbsUp}  
                        /> {''} 
                        <small>{showImage.likes} Likes</small>  
                     </li> 
                     <li title="Total de visualizações dessa imagem">
                       <FontAwesomeIcon 
                          icon={faEye} 
                      /> {''} 
                        <small>{showImage.views} Visualizações</small>  
                     </li> 
                     <li title="Total de comentários dessa imagem">
                        <FontAwesomeIcon 
                          icon={faComments} 
                        /> {''} 
                        <small>{showImage.comments} Comentários</small>
                     </li> 
                     <li title="Total de downloads dessa imagem">
                        <FontAwesomeIcon 
                          icon={faCloudDownloadAlt} 
                        /> {''} 
                         <small>{showImage.downloads} Downloads</small>
                     </li> 
                 </span>

                  <span> 
                     <li title="Tags disponíveis para essa imagem">
                       <FontAwesomeIcon 
                          icon={faHashtag} 
                        /> {''} 
                         <small>{showImage.tags}</small>
                     </li> 
                     <li title="Fotógrafo responsável">
                        {!showImage.userImageURL ? (
                           <FontAwesomeIcon 
                               icon={faCamera} 
                           /> 
                       ) : (
                           <img 
                            src={showImage.userImageURL} 
                            alt="" 
                            style={{
                               maxWidth: '20px', 
                               borderRadius: '50%', 
                               marginRight: '5px'
                               }} title={showImage.user}
                           /> 
                        )} {''} 
                        <small>{showImage.user}</small>
                     </li> 
                     <li title="Clique para ver no Pixabay">
                       <FontAwesomeIcon 
                          icon={faExternalLinkAlt} 
                        /> {''} 
                         <small className="underline">
                            <a href={showImage.pageURL} target="_blank" rel="noopener noreferrer">Ver no Pixabay</a>
                         </small> 
                     </li> 
                     <li title="Clique para ver  em alta qualidade">
                        <FontAwesomeIcon 
                          icon={faImage} 
                        /> {''}
                         
                         <small className="underline">
                         <a href={showImage.largeImageURL} target="_blank" rel="noopener noreferrer">Ver em alta resolução</a>
                        </small>   
                     </li> 
                  </span>
               </ul>   
            </Modal.Footer>
         </Modal>
      </>   
   )
}

export default GalleryModal;
