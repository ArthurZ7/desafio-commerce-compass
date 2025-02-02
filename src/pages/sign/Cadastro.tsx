import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cadastro, loginWithGoogle } from '../../components/validaLogin';
import styles from './sign.module.scss';
import { 
  redeImg, 
  wifiImg, 
  batteryImg, 
  googleImg
} from '../../components/imgImports';
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
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        <button className={styles.loginBtn} onClick={handleSignUp}>
          Sign Up
        </button>

        <div className={styles.googleBtn} onClick={handleGoogleLogin} style={{ cursor: "pointer" }}>
          <img src={googleImg} alt="Google Logo" />
          Sign in with Google
        </div>

        <p className={styles.signup}>
          Already have an account? <a href="/">Sign In here</a>
        </p>
      </div>
    </div>
  );
};

export default Cadastro;
