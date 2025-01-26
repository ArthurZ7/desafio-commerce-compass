import React from 'react';

interface MyTextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function MyTextInput(props: MyTextInputProps) {
    return (
        <input
            type="text"
            autoCapitalize="none"
            placeholder="Enter text"
            style={styles.input}
            {...props}
        />
    );
}

const styles = {
    input: {
        borderRadius: '8px',
        borderColor: '#1D013F',
        padding: '8px',
        color: '#000',
        borderWidth: '1px',
        width: '100%',
        height: '50px',
        marginBottom: '16px',
        borderStyle: 'solid',
    } as React.CSSProperties,
};