import { Routes, Route } from 'react-router-dom';

import './App.scss';

import Layouts from './components/Layouts';

import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import Contact from './pages/contact/Contact';
import Auth from './pages/auth/Auth';
import Checkout from './pages/checkout/checkout';

function App() {
  return (
    <Routes className="app">
      <Route path="/" element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
        <Route path="auth" element={<Auth />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
