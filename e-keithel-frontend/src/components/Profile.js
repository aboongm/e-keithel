import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <section>
      <h1>Products Page</h1>
      <br />
      <p>You must have been assigned an Admin role.</p>
      <div className="flexGrow">
        <Link to="/">Home</Link>
      </div>
    </section>
  );
};

export default Profile;
