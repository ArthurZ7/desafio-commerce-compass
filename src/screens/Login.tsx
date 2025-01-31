import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, loginWithGoogle } from '../components/validaLogin';
import styles from '../css/sign.module.scss';

import redeImg from '../img/rede.png';
import wifiImg from '../img/wifi.png';
import batteryImg from '../img/battery.png';
import googleImg from '../img/google-icon.png';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const result = await login(email, password);
    
    if (result.success) {
      alert(result.message);
      navigate('/home'); 
    } else {
      alert(result.message); 
    }
  };

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
    <div className={styles.container}>
      <div className={styles.top}>
        <h1>9:41</h1>
        <div className={styles.iconsTop}>
          <img src={redeImg} alt="Rede" />
          <img src={wifiImg} alt="WiFi" />
          <img src={batteryImg} alt="Battery" />
        </div>
      </div>
      <div className={styles.sign}>
        <h1>Audio</h1>
        <p>Create your account to get started</p>

        <div className={styles.inputGroup}>
          <input className='input-email'
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <input className='input-senha'
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.forgotPassword}>
          <a href="#">Forgot Password</a>
        </div>
        
        <button className={styles.loginBtn} onClick={handleLogin}>
          Sign In
        </button>


        <div className={styles.googleBtn} onClick={handleGoogleLogin} style={{ cursor: "pointer" }}>
          <img src={googleImg} alt="Google Logo" />
          Sign in with Google
        </div>


        <div className={styles.signup}>
          <p> Didn’t have any account? 
            <a href='/cadastro'> Sign Up here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;