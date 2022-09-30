import React from 'react';
import { useNavigate } from 'react-router-dom';
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
    <section>
      <button
        onClick={() => handleSignOut()}
        type="button"
        className="flex items-center justify-start w-full py-3 space-x-6 font-bold text-red-500 rounded focus:outline-none focus:text-700 hover:text-red-600 "
      >
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 8V6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20H12C12.5304 20 13.0391 19.7893 13.4142 19.4142C13.7893 19.0391 14 18.5304 14 18V16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 12H21M21 12L18 9M21 12L18 15"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="leading-4 border-b border-transparent text-danger">
          Logout
        </p>
      </button>
    </section>
  );

  return content;
};

export default Home;
