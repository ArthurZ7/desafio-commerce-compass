import React, { useState, useEffect } from 'react';
import { 
    redeImg, 
    wifiImg, 
    batteryImg
} from './imgImports.tsx';

const Header: React.FC = () => {
    const [time, setTime] = useState<string>(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        }, 60000); // Atualiza a cada minuto

        return () => clearInterval(timer);
    }, []);

    // Estilos
    const headerStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '20px',
        fontSize: '8px',
        padding: '0 20px'
    };

    const iconsTopStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    };

    const imgStyle: React.CSSProperties = {
        filter: 'invert(100%)',
        paddingLeft: '8px'
    };

    // Renderização
    return (
        <div style={headerStyle}>
            <h1>{time}</h1>
            <div style={iconsTopStyle}>
                <img src={redeImg} alt="Rede" style={imgStyle} />
                <img src={wifiImg} alt="WiFi" style={imgStyle} />
                <img src={batteryImg} alt="Battery" style={imgStyle} />
            </div>
        </div>
    );
};

export default Header;