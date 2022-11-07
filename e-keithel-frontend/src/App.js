import { Route, Routes } from 'react-router-dom';
import Layout from './app/layouts/Layout';
import Signup from './app/components/auth/Signup';
import Login from './app/components/auth/Login';
import Home from './app/components/Home';
import ProductList from './app/components/ProductList';
import Checkout from './app/components/Checkout';
import Payment from './app/components/Payment';
import Search from './app/components/Search';
import ProductListSelected from './app/components/ProductListSelected';
import RequireAuth from './app/layouts/RequireAuth';
import AddProduct from './app/components/sellerPages/AddProduct';

const ROLES = {
  buyer: 'buyer',
  admin: 'admin',
};

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:categoryId" element={<ProductListSelected />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/search" element={<Search />} />

        <Route element={<RequireAuth />}>
          <Route path="/payment" element={<Payment />} />
          <Route path="/addProduct" element={<AddProduct />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
