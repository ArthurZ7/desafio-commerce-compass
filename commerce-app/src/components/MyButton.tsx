import React from 'react';
import './MyButton.css';

interface MyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
}

export function MyButton({ title, className, ...rest }: MyButtonProps) {
    return (
        <button {...rest} className={`button ${className}`}>
            {title}
        </button>
    );
}
