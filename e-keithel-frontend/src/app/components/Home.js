import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../redux/reducers/authActions';
import { useDispatch } from 'react-redux';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  const content = (
    <section className="public">
      <header>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <h1>
          Welcome to <span className="nowrap">e-Keithel!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          Located in Beautiful Downtown Foo City, e-Keithel is a online
          ecommerce website.
        </p>
        <address className="public__addr">
          e-Keithel Inc.
          <br />
          555 Foo Drive
          <br />
          Foo City, IMPHAL 795001
          <br />
          <a href="tel:+15555555555">(555) 555-5555</a>
        </address>
      </main>
      <footer></footer>
    </section>
  );

  return content;
};

export default Home;
