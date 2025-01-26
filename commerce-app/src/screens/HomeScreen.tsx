import React from 'react';
import auth from '@react-native-firebase/auth';

import { MyButton } from '../components/MyButton';
import { styles } from './styles';

export function HomeScreen() {
    function signOut() {
        auth().signOut();
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>
                Essa tela só pode ser vista por usuários autenticados
            </h1>
            <MyButton onClick={signOut} title="Sair" />
            <p>
                by <span style={styles.coffText}>Coffstack</span>
            </p>
        </div>
    );
}