
import { useEffect, useState } from "react"; 
import axios from 'axios';  
import { LazyLoadImage } from 'react-lazy-load-image-component';
import GalleryPagination from "../common/GalleryPagination";
import GalleryScrollTop from "../common/GalleryScrollTop";
import GallerySearch from "../layout/GallerySearch"
import GalleryLoading from "../common/GalleryLoading";
import GalleryModal from "../layout/GalleryModal";  

const GalleryImages = ( ) => { 
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0); 
  const [open, setOpen] = useState(false);
  const [showImage, setShowImage] = useState('');    

  // determina a quantidade de imagens por página
  const userPage = 40;
  const startIndex = (page - 1) * userPage;
  const selectedImages = images.slice(startIndex, startIndex + userPage);

  // determina a qunatidade de imagens por página
  const handlePagination = (num) => {
    setPage(num);
    goToTopImg()
  };

  // redireciona ao topo das image cards ao trocar de página
  const goToTopImg = () =>{
    window.scrollTo({
      top: 720,  
      behavior: 'smooth' 
    });
  };

  // resposável por abrir modal e exibir dados da imagem clicada
  const handleIndex = (image) => {
    setOpen(true)   
    setShowImage(image)  
  };
   

  // fetch da api
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get(
          `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${searchTerm}&image_type=photo&pretty=true&per_page=180&safesearch=true&orientation=horizontal&order=popular&editors_choice=true&lang=pt`
        ); 

        setIsLoading(true);
        setImages(res.data.hits);  
        setIsLoading(false);
        setTotalPages(Math.ceil(res.data.hits.length / userPage));
      } catch (err) {
        console.error(err);
      } 
    };
    fetchImages();

  }, [searchTerm]);

 
  return (
      <>     
          <GallerySearch searchText={(search) => setSearchTerm(search)}/>  
          {!isLoading && !images.length && (
            <div className="notfound">
                <h2>Nenhum resultado encontrado</h2>
            </div>
          )}
          {isLoading ? (
            <div className="loading">
              <GalleryLoading/> 
            </div>
          ) : (
            <main className="gallery__cards">
              <ul className="gallery__cards--gallery">
                {selectedImages.map((image, id) => (
                  <li className="gallery__cards--grid" key={image.id} onClick={() => handleIndex(image)}> 
                    <LazyLoadImage
                      src={image.webformatURL}
                      effect="blur"
                      threshold="1" 
                      delayTime="1000"
                      alt="images"  
                    /> 
                      <div className="overlay">
                        <span title="Ver detalhes dessa imagem" onClick={() => handleIndex(image)}>
                          Ver detalhes
                        </span> 
                      </div> 
                  </li> 

                  ))}
              </ul>  
            </main>   
          )}
          {!isLoading && !images.length ? (
              <div></div>
            ) : (
              <div className="pagination">
                <GalleryPagination
                  totalPages={totalPages}
                  handlePagination={handlePagination}
                  page={page}
                />
                {<GalleryModal 
                  open={open} 
                  setOpen={setOpen} 
                  showImage={showImage}  
                  selectedImages={selectedImages} 
                />}
              </div>
            )}
            {/*icone scroll para topo da página*/}
            <GalleryScrollTop/>
    </>
  );
};

export default GalleryImages;
