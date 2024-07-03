import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import './App.css';


import Header from './layouts/Header';
import Footer from './layouts/Footer';

import PageNotFound from './container/pages/PageNotFound';
import Home from './container/pages/Home'
import About from './container/pages/About';
import Contact from './container/pages/Contact';
import Product from './container/products';
import ProductCreate from './container/products/create';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about-us" element={<About />}></Route>
          <Route path="/contact-us" element={<Contact />}></Route>

          <Route path="/products" element={<Product />}></Route>
          <Route path="/products/create" element={<ProductCreate />}></Route>

          <Route path="*"  element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
