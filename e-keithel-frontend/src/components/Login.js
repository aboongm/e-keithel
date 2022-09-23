import { useRef, useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';

// import axios from 'axios';
import axios from '../api/axios';
const LOGIN_URL = '/users/sign_in';

const Login = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [email, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('email and password ', email, pwd);
    try {
      console.log('clicked!!!!!!!!!!!!!!!!!!!!!!', email, pwd);
      console.log('Check 1:', email === 'aboongm@aboongm.com');
      console.log('check 2: ', pwd === 'password');
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({
          user: {
            // email: 'aboongm@aboongm.com',
            // password: 'password',
            email: email,
            password: pwd,
          },
        }),
        {
          headers: { 'Content-Type': 'application/json' },
          // withCredentials: true,
          // Accept: 'application/json',
          // Authorization: localStorage.token,
        }
      );

      console.log(JSON.stringify(response?.data));
      // console.log(JSON.stringify(respons));
      const accessToken = response?.data?.accessToken;
      console.log('accessToken: ', response?.data?.status?.data?.jti);
      console.log('roles: ', response?.data?.status?.data?.role);
      // const roles = response?.data?.roles;

      // setAuth({ email, pwd, roles, accessToken });
      setAuth({ email, pwd, accessToken });
      setEmail('');
      setPwd('');
      navigate(from, { replace: true });
    } catch (err) {
      if (!err) {
        if (!err?.response) {
        } else if (err.response?.status === 400) {
          setErrMsg('Missing Email or Password');
        } else if (err.response?.status === 401) {
          setErrMsg('Unauthorized');
        } else {
          setErrMsg('Login Failed');
        }
        errRef.current.focus();
      }
    }
  };

  return (
    <section>
      <p
        ref={errRef}
        className={errMsg ? 'errmsg' : 'offscreen'}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          ref={emailRef}
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required
        />
        <button>Login</button>
      </form>
      <p>
        Need an Account?
        <br />
        <span className="line">
          <Link to="/register">Sign Up</Link>
        </span>
      </p>
    </section>
  );
};

export default Login;
