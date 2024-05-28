import React from "react";
import { SvgIconsSearch } from "../assets/images/SvgIcons";

const Search = () => {
  return (
    <section className="section-search-products">
      <form action="">
        <input
          type="text"
          placeholder="pesquise aqui..."
          name="search-product"
          id="search-product"
        />
        <button id="search">
          <SvgIconsSearch />
        </button>
      </form>
      <h1>Livros à venda</h1>
      <section className="section-list-products">
        <div className="section-products-ebook-item">
          <img src="https://marketplace.canva.com/EAE4oJOnMh0/1/0/1003w/canva-capa-de-livro-de-suspense-O7z4yw4a5k8.jpg" alt="Imagem do produto" />
          <div className="author-precing">
            <h5>O segredo das sombras</h5>
            <span>Joao souza</span>
            <p>R$200,98</p>
          </div>
        </div>
        <div className="section-products-ebook-item">
          <img src="https://marketplace.canva.com/EAE4oJOnMh0/1/0/1003w/canva-capa-de-livro-de-suspense-O7z4yw4a5k8.jpg" alt="Imagem do produto" />
          <div className="author-precing">
            <h5>O segredo das sombras</h5>
            <span>Joao souza</span>
            <p>R$200,98</p>
          </div>
        </div>
        <div className="section-products-ebook-item">
          <img src="https://marketplace.canva.com/EAE4oJOnMh0/1/0/1003w/canva-capa-de-livro-de-suspense-O7z4yw4a5k8.jpg" alt="Imagem do produto" />
          <div className="author-precing">
            <h5>O segredo das sombras</h5>
            <span>Joao souza</span>
            <p>R$200,98</p>
          </div>
        </div>
       
      </section>
    </section>
  );
};

export default Search;
