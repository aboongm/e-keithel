import { Route, Routes } from 'react-router-dom';
import Layout from './app/layouts/Layout';
import Signup from './app/components/auth/Signup';
import Login from './app/components/auth/Login';
import Home from './app/components/Home';
// import Header from './app/components/Header';

function App() {
  return (
    // <div className="App">
    <Routes>
      {/* <Header /> */}
      <Route path="/" element={<Layout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route index element={<Home />} />

        {/* <Route
          element={<RequireAuth allowedRoles={[ROLES.Manager, ROLES.Admin]} />}
        ></Route> */}
      </Route>
    </Routes>
    // </div>
  );
}

export default App;
