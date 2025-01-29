import React, { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { addDoc, collection, deleteDoc, getDocs, getFirestore } from "firebase/firestore";
import './App.css'; // Importa o CSS
import redeImg from './assets/rede.png';
import wifiImg from './assets/wifi.png';
import batteryImg from './assets/battery.png';
import googleImg from './assets/google-icon.png';
import mailImg from './assets/mail.png';
import lockImg from './assets/lock.svg';


const firebaseApp = initializeApp ({
  apiKey: "AIzaSyCXCWp3BVw1Sun67k-7_spk2hML3laMfpw",
  authDomain: "commerce-compass.firebaseapp.com",
  projectId: "commerce-compass",
  storageBucket: "commerce-compass.firebasestorage.app",
  messagingSenderId: "895175227637",
  appId: "1:895175227637:web:5ae77986defd41ced46dbc",
  measurementId: "G-E7V7DNS3Z5"
});

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState<{ id: string; email: string; password: string }[]>([]);

  const db = getFirestore(firebaseApp);
  const usersCollectionRef = collection(db, "users");

  async function criarDado() {
    try {
      await addDoc(usersCollectionRef, { email, password });
      console.log("Usuário cadastrado com sucesso!");
    } catch (e) {
      console.error("Erro ao adicionar usuário:", e);
    }
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ id: doc.id, email: doc.data().email, password: doc.data().password })));
    };
    getUsers();
  }, []);

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
          <a href="#" >Forgot Password</a>
        </div>
        
        <button className="login-btn" onClick={criarDado}>Sign In</button>


        <div className="google-btn">
          <img src={googleImg} alt="Google Logo" />
          Sign in with Google
        </div>

        <p className="signup">
          Didn't have an account? <a href="#">Sign Up here</a>
        </p>
      </div>
    </div>
  );
};

export default App;
