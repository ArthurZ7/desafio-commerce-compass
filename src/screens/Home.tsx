import React from 'react';
import '../css/styles.css';

import redeImg from '../img/rede.png';
import wifiImg from '../img/wifi.png';
import batteryImg from '../img/battery.png';
import avatarImg from '../img/Avatar.png';
import logoImg from '../img/audioLogo.png';


const Home: React.FC = () => {
    return (
        <div className="container">
            <div className="header">
                <h1>9:41</h1>
                <div className='icons-top'>
                    <img src={redeImg} alt="Rede" />
                    <img src={wifiImg} alt="WiFi" />
                    <img src={batteryImg} alt="Battery" />
                </div>
            </div>
            <div className="menu">
                <img src={logoImg} alt="logo" />
                <img src={avatarImg} alt="avatar" />
            </div>
            <div className="top">
                <p>Hi, Andrea</p>
                <h1>What are you looking for today?</h1>
                <input type="text" />
            </div>
        </div>
    );
};

export default Home;