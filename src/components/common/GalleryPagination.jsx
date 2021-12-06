import React from 'react'

const GalleryPagination = ({ totalPages, handlePagination, page }) => {
   // faz o spread de todas as páginas disponíveis
   const pages = [...Array(totalPages).keys()];

 
   
   // redireciona o usuário ao numero da página correspondente 
   const showTotalPages = pages.map((num) => num + 1);


   return (
      <>
      <div className="pagination__wrapper">
        {showTotalPages.map((num, index) => (
          <button
            className={`pagination__button 
            ${page === num ? "active" : ""}`}
            key={index}
            onClick={() => handlePagination(num)}
            title="Ir para próxima página"
          >
            {num}
          </button>
        ))}
      </div>

      <div className="pagination__info">
         <p className="pagination__wrapper-numbers" style={{fontSize: '12px'}}>
            <span className="pagination__wrapper--inner">
               Mostrando página{" "}
            </span>
            <span className="active-page">{page}</span>{" "}
            de {" "}
            <span className="pagination__wrapper--span">{pages.length}</span>
            
         </p>
      </div>  
      </>
   )
}

export default GalleryPagination;
