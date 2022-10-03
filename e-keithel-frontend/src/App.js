import { Route, Routes } from 'react-router-dom';
import Layout from './app/layouts/Layout';
import Signup from './app/components/auth/Signup';
import Login from './app/components/auth/Login';
import Home from './app/components/Home';

function App() {
  return (
    // <div className="App">
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
    // </div>
  );
}

export default App;
