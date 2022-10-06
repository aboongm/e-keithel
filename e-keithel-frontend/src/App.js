import { Route, Routes } from 'react-router-dom';
import Layout from './app/layouts/Layout';
import Signup from './app/components/auth/Signup';
import Login from './app/components/auth/Login';
import Home from './app/components/Home';
import ProductList from './app/components/ProductList';
import Checkout from './app/components/Checkout';
import Payment from './app/components/Payment';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />

        {/* <Route
          element={<RequireAuth allowedRoles={[ROLES.Manager, ROLES.Admin]} />}
        ></Route> */}
      </Route>
    </Routes>
  );
}

export default App;
