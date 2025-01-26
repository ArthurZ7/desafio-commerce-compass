import React from 'react';

interface MyLinkProps {
    title: string;
    onPress: () => void;
}

export function MyLink({title, onPress}: MyLinkProps) {
    return (
        <button onClick={onPress} style={styles.button}>
            <span style={styles.text}>{title}</span>
        </button>
    );
}

const styles = {
    button: {
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
    },
    text: {
        marginTop: '16px',
        fontWeight: 'bold',
        color: '#003366', // substitua por colors.primaryDark
        fontSize: '16px',
        textDecoration: 'underline',
        textAlign: 'center',
    },
};