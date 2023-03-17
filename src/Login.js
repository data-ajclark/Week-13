import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './Login.css';
import video1 from "./Videos/video1.mp4";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const LoginForm = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
  const users = [{ email: "Amy@gmail.com", password: "1234" }];
  const handleSubmit = (e) => {
    e.preventDefault()
    const account = users.find((user) => user.email === email);
    if (account && account.password === password) {
      setauthenticated(true)
      localStorage.setItem("authenticated", true)
      navigate ("./Travel");
    }
  };
  
  return (
    <div className="hero-container">
      <div className="login">
      <video src={video1} autoPlay loop muted />
        <form onSubmit={handleSubmit}>
          <div className="login-sub">
          <h3>Login</h3>
          </div>
          <div>
            <input type="email" name="Email" value={email} placeholder='Email Address' onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" name="Password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit" value="Submit" className="hero-btns" >Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
  };

export default LoginForm;
  