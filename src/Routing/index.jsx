import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import AddProducts from './component/Products/AddProducts';
import ListProducts from './component/Products/ListProducts';
import Products from './component/Products/Products';
import ProductDisplay from './component/Products/ProductsDisplay';
import SearchProduct from './component/Products/SearchProduct';
import './index.css';

const Routing = () => {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="login"> Login </Link>
        <Link to="products/search"> Products </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="products" element={<Products />}>
          <Route path="search" element={<SearchProduct />} />
          <Route path="list" element={<ListProducts />} />
          <Route path="add" element={<AddProducts />} />
          <Route path=":id" element={<ProductDisplay />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Routing;
