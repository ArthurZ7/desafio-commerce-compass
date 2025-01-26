import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { initializeApp } from "firebase/app";
import { collection, getDoc, getDocs, getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseApp = initializeApp ({
  apiKey: "AIzaSyCXCWp3BVw1Sun67k-7_spk2hML3laMfpw",
  authDomain: "commerce-compass.firebaseapp.com",
  projectId: "commerce-compass",

  storageBucket: "commerce-compass.firebasestorage.app",
  messagingSenderId: "895175227637",
  appId: "1:895175227637:web:5ae77986defd41ced46dbc",
  measurementId: "G-E7V7DNS3Z5"
});

import { HomeScreen } from './screens/HomeScreen';
import { SignInScreen } from './screens/SignScreen';
import { colors } from './colors';

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState<{ id: string; }[]>([]);

  const db = getFirestore(firebaseApp);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);


  //   const unsubscribe = auth().onAuthStateChanged(_user => {
  //     if (initializing) {
  //       setInitializing(false);
  //     }
  //     setUser(_user);
  //   });

  //   return unsubscribe;
  // }, [initializing]);

  // if (initializing) {
  //   return (
  //     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
  //       <div className="spinner" style={{ borderColor: colors.primary }} />
  //     </div>
  //   );
  // }

  return (
    <div>
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={criarDado}>Criar dado</button>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <div>Email: {user.email}</div>
              <div>Password: {user.password}</div>
              <button onClick={() => deleteUser(user.id)}>Deletar</button>
            </li>
          );
        })}
      </ul>
    </div>
  );

  };

export default App;
