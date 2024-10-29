import { useState, useEffect } from "react";
import Navbar2 from "../components/Navbar2";
import Homecss from "./Home.module.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import car1 from '../assets/caro1.png'
import car2 from '../assets/caro2.png'
import Footer from "../components/Footer";


const Home = () => {
  const [categories,setCategories] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/products");
        const fetchedProducts = response.data;

        const groupedByCategory = fetchedProducts.reduce((acc, product) => {
          const category = product.category || "Others"; // Fallback for products without a category
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push(product);
          return acc;
        }, {});

        setCategories(groupedByCategory);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, []);


  const handleBuy = async (product) => {
    try {
      await axios.post("http://localhost:3001/api/cart/add", {
        productId: product._id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
      });
      alert(`${product.name} added to cart!`);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };
  return (
    <>
     <div className={Homecss.body}>
      <Navbar2></Navbar2>

      <div id="carouselExampleIndicators" className={ `carousel slide ${Homecss.caro}  `}  data-bs-ride="carousel">
  <ol className="carousel-indicators">
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active bg-dark"></li>
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
  </ol>
  <div className="carousel-inner ">
    <div className="carousel-item active">
      <img className={`d-block w-100   ${Homecss.caroimg}`}  src={car1} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className={`d-block w-100   ${Homecss.caroimg}`} src={car2} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className={`d-block w-100   ${Homecss.caroimg}`}  src={car1} alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev bg-transparent" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next bg-transparent" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>


      <div className={Homecss.container}>
        {Object.keys(categories).map((category) => (
          <div key={category}>
            <h2 className={Homecss.h2}>{category}</h2>
            <div className={Homecss.category}>
        {categories[category].map((product) => (
          <div key={product._id} className={Homecss.card}>
            <img
              className={Homecss.img}
              src={product.image} 
              alt={product.name}
            />
            <p className={Homecss.texthead}>{product.name}</p>
              {/* <span className={Homecss.describe}>{product.description}</span> */}
              <p className={Homecss.textprice}>${product.price}</p>
              <button className={Homecss.button} onClick={() => handleBuy(product)}>Buy!</button>
            </div>
            
        ))}

        
        </div>
      </div>
        ))}
        
      </div>
      <Footer/>
      </div>
    </>
  );
};
export default Home;
