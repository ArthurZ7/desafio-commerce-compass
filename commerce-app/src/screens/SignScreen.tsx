import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';

import { styles } from './styles';

import logo from '../assets/logo.png';
import { MyButton } from '../components/MyButton';
import { MyTextInput } from '../components/MyTextInput';
import { MyLink } from '../components/MyLink';

export function SignInScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function signUp() {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }

    function signIn() {
        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log('user is authenticated');
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <div style={{ ...styles.container, justifyContent: 'center' }}>
            <img src={logo} alt="Logo" style={{ width: 200 }} />
            <MyTextInput placeholder="e-mail" value={email} onChange={e => setEmail(e.target.value)} />
            <MyTextInput
                placeholder="senha"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />

            <MyButton onClick={signIn} title="Entrar no App" />

            <MyLink title="Cadastrar" onClick={signUp} />
        </div>
    );
}
