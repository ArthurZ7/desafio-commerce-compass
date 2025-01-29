import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../components/validaLogin'; // Importa a função de login
import { loginWithGoogle } from '../components/validaLogin';
import '../css/sign.css';

import redeImg from '../img/rede.png';
import wifiImg from '../img/wifi.png';
import batteryImg from '../img/battery.png';
import googleImg from '../img/google-icon.png';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Função para login
  const handleLogin = async () => {
    const result = await login(email, password);
    
    if (result.success) {
      alert(result.message);
      navigate('/home'); 
    } else {
      alert(result.message);
    }
  };

  // Função de login com Google
  const handleGoogleLogin = async () => {
    const result = await loginWithGoogle();
    
    if (result.success) {
      alert(result.message);
      navigate('/home');
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="container">
      <div className="top">
        <h1>9:41</h1>
        <div className='icons-top'>
          <img src={redeImg} alt="Rede" />
          <img src={wifiImg} alt="WiFi" />
          <img src={batteryImg} alt="Battery" />
        </div>
      </div>
      <div className="sign">
        <h1>Audio</h1>
        <p>It's modular and designed to last</p>

        <div className="input-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="forgot-password">
          <a href="#">Forgot Password</a>
        </div>
        
        <button className="login-btn" onClick={handleLogin}>
          Sign In 
        </button>

        <div className="google-btn" onClick={handleGoogleLogin} style={{ cursor: "pointer" }}>
          <img src={googleImg} alt="Google Logo" />
          Sign in with Google
        </div>

        <div className="signup">
          <p> Didn’t have any account? 
            <a href='/cadastro'> Sign Up here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;