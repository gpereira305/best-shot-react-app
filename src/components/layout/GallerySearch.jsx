import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch } from '@fortawesome/free-solid-svg-icons';




const GallerySearch = ({ searchText}) => {
  const [search, setSearch] = useState(""); 

  // busca por resultados baseados no input do usuário,
  // limpa o input após a busca, redireciona par a zona de imagens abaixo, 
  // faz a rolagem de forma suave
  const onSubmitHandler = (e) => {
    e.preventDefault();
    searchText(search);
    setSearch(e.target.reset());

    window.scrollTo({
      top: 920,   
      behavior: 'smooth' 
    });
  };


  return (
    <section className="search">
      <form onSubmit={onSubmitHandler}>
        <input
          className="search__input"
          onChange={(e) => setSearch(e.target.value)}  
          type="search" 
          placeholder="Digite um termo e encontre imagens..."
        /> 
        <div className="search__icon">
          <FontAwesomeIcon
            icon={faSearch} 
          />
        </div>
      </form>
    </section>
  );
};

export default GallerySearch;
