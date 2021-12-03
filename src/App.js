import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel/>
      <div className="d-flex justify-content-center mt-5">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
