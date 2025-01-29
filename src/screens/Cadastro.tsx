import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cadastro } from '../components/validaLogin';
import { loginWithGoogle } from '../components/validaLogin';

import '../css/sign.css';

import redeImg from '../img/rede.png';
import wifiImg from '../img/wifi.png';
import batteryImg from '../img/battery.png';
import googleImg from '../img/google-icon.png';

const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Função dedicada ao cadastro
  const handleSignUp = async () => {
    const result = await cadastro(email, password);
    
    if (result.success) {
      alert(result.message);
      navigate('/'); 
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
        <p>Create your account to get started</p>

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
        
        <button className="login-btn" onClick={handleSignUp}>
          Sign Up
        </button>

        <div className="google-btn" onClick={handleGoogleLogin} style={{ cursor: "pointer" }}>
          <img src={googleImg} alt="Google Logo" />
          Sign in with Google
        </div>

        <p className="signup">
          Already have an account? <a href="/">Sign In here</a>
        </p>
      </div>
    </div>
  );
};

export default Cadastro;