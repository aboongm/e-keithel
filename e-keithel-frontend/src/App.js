import { Route, Routes } from 'react-router-dom';
import Layout from './app/layouts/Layout';
import Signup from './app/components/auth/Signup';
import Login from './app/components/auth/Login';
import Home from './app/components/Home';
import ProductList from './app/components/ProductList';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<ProductList />} />

        {/* <Route
          element={<RequireAuth allowedRoles={[ROLES.Manager, ROLES.Admin]} />}
        ></Route> */}
      </Route>
    </Routes>
  );
}

export default App;
