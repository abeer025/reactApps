import { useState} from 'react';
import './App.css';
import 'flowbite';
import Header from './components/Header';
import Gallery from './components/gallery';
import Footer from "./components/Footer";

function App() {
  let selectedProduct = null;

  const items = [
    {
      title: "Pillow 1",
      img: "https://i.etsystatic.com/6653212/c/2189/2189/411/75/il/d764e9/2245055505/il_300x300.2245055505_4b6n.jpg",
      price: "$2000",
      id: 1,
    },
    {
      title: "Personalized Printed Nutella",
      img: "https://i.etsystatic.com/47225941/r/il/834e25/5834678799/il_600x600.5834678799_84ht.jpg",
      price: "$4000",
      id: 2,
    },
    {
      title: "Modern Walnut Desk",
      img: "https://i.etsystatic.com/ij/ce4920/4870987014/ij_fullxfull.4870987014_sl9l4bz3.jpg?version=0",
      price: "$7000",
      id: 3,
    },
  ];

  function handleCardClick(product) {
    selectedProduct = product;
    document.getElementById('imgDetail').src = product.img;
    document.getElementById('imgTitle').innerText = product.title;
    document.getElementById('imgPrice').innerText = product.price;
    document.getElementById('product-detail').style.display = 'block';
    document.getElementById('gallery').style.display = 'none';
  }

  function handleClose(Gallery) {
    document.getElementById('product-detail').style.display = 'none';
    document.getElementById('gallery').style.display = 'block';
  }

  return (
    <>
      <Header />
      <div id="gallery" style={{ display: 'block' }}>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {items.map((item) => (
                <Gallery
                  key={item.id}
                  img={item.img}
                  title={item.title}
                  price={item.price}
                  onPress={() => handleCardClick(item)}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
      <div id="product-detail" className="overlay" style={{ display: 'none' }}>
        <div className='productImageBox'>
          <img id="imgDetail" alt="Product" className='centered-image' />
          <div className="product-info">
            <h2 id="imgTitle"></h2>
            <p id="imgPrice"></p>
          </div>
          <button onClick={handleClose} className='close-button'>
            Close
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
