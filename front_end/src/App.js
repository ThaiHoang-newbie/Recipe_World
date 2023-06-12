import HeroArea from "./components/HeroArea";
import Navbar from "./components/Navbar";
import '@fortawesome/fontawesome-free/css/all.min.css';
import TopCategory from "./components/TopCategory";
import ShowProduct from "./components/ShowProduct";
import Products from "./components/Products";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <HeroArea></HeroArea>
      <TopCategory />
      <ShowProduct />
      <Products />
      <Footer />
    </div>
  )
}
export default App
