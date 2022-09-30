import { Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Layout from './components/Layout';
import Home from './components/Home';
import Product from './components/Product';
import Cart from './components/Cart';
import Unauthorized from './components/Unauthorized';
import Linkpage from './components/Linkpage';
import Checkout from './components/Checkout';
import Profile from './components/Profile';
import History from './components/History';
import RequireAuth from './components/RequireAuth';

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
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="home" element={<Home />} />
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
