import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import men_banner from './Components/Assets/Beige and Black Modern Elegant Fashion Email Header_page-0001.jpg';
import women_banner from './Components/Assets/Beige and Black Modern Elegant Fashion Email Header_page-0001.jpg';
import kid_banner from './Components/Assets/Beige and Black Modern Elegant Fashion Email Header_page-0001.jpg';

function App() {
  return (
    <div>
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/spices" element={<ShopCategory banner={men_banner} category="Spices" />} />
          <Route path="/salt_variants" element={<ShopCategory banner={women_banner} category="Salt_Variant" />} />
          <Route path="/spice_powders" element={<ShopCategory banner={kid_banner} category="Spice_Powders" />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
