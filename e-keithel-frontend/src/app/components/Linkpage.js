import { Link } from 'react-router-dom';

const LinkPage = () => {
  return (
    <section>
      <h1>Links</h1>
      <br />
      <h2>Public</h2>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <br />
      <h2>Private</h2>
      <Link to="/home">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/checkout">Checkout</Link>
      <Link to="/history">History</Link>
    </section>
  );
};

export default LinkPage;
