import { Routes, Route } from 'react-router-dom';

import Register from './app/components/auth/Register';
import Login from './app/components/auth/Login';
import Layout from './app/layouts/Layout';
import Home from './app/components/Home';
import Product from './app/components/Product';
import Cart from './app/components/Cart';
import Unauthorized from './app/components/Unauthorized';
import Linkpage from './app/components/Linkpage';
import Checkout from './app/components/Checkout';
import Profile from './app/components/Profile';
import History from './app/components/History';
// import RequireAuth from './components/RequireAuth';

// const ROLES = {
//   User: 2001,
//   Editor: 1984,
//   Admin: 2000,
// };

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="products" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="linkpage" element={<Linkpage />} />
          <Route path="unauthorized" element={<Unauthorized />} />

          {/* we want to protect these routes */}
          {/* <Route element={<RequireAuth />}> */}
          <Route path="profile" element={<Profile />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="history" element={<History />} />
          {/* </Route> */}

          {/* catch all */}
          {/* <Route path="*" element={<Missing />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
