import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../components/validaLogin'; // Importa a função de cadastro
import './sign.css';

// Imagens
import redeImg from './assets/rede.png';
import wifiImg from './assets/wifi.png';
import batteryImg from './assets/battery.png';
import googleImg from './assets/google-icon.png';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Função dedicada ao cadastro
  const handleSignUp = async () => {
    const result = await signUp(email, password);
    
    if (result.success) {
      alert(result.message);
      navigate('/login'); // Redireciona para login após cadastro
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
          Sign Up {/* Botão de cadastro */}
        </button>

        <div className="google-btn">
          <img src={googleImg} alt="Google Logo" />
          Sign up with Google
        </div>

        <p className="signup">
          Already have an account? <a href="/">Sign In here</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;