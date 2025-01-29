import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../components/validaLogin'; // Importa a função de login
import './sign.css';

import redeImg from '../img/rede.png';
import wifiImg from '../img/wifi.png';
import batteryImg from '../img/battery.png';
import googleImg from '../img/google-icon.png';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Função dedicada ao login
  const handleLogin = async () => {
    const result = await login(email, password); // Usa a função do validaLogin.tsx
    
    if (result.success) {
      alert(result.message);
      navigate('/dashboard'); // Redireciona após login bem-sucedido
    } else {
      alert(result.message); // Mostra mensagem de erro
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
          Sign In {/* Texto fixo para login */}
        </button>

        <div className="google-btn">
          <img src={googleImg} alt="Google Logo" />
          Sign in with Google
        </div>

        <p className="signup"> Didn’t have any account? 
          <a href='/cadastro'> Sign Up here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;