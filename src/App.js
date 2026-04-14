import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import Shop from './components/Shop';
import Contact from './components/Contact';
import Cart from './components/Cart';
import ProductDetail from './components/Productdetail';
import About from './components/About';
import Services from './components/Services';
import Wishlist from './components/Wishlist';
import Checkout from './components/Checkout';
import store from './slice/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/product' element={<Shop />} /> 
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/productdetail' element={<ProductDetail />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}