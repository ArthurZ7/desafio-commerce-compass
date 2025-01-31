import React from 'react';
import styles from '../css/styles.module.scss';
import { 
    redeImg, 
    wifiImg, 
    batteryImg, 

} from '../components/imgImports';

const Home: React.FC = () => {

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>9:41</h1>
                <div className={styles.iconsTop}>
                    <img src={redeImg} alt="Rede" />
                    <img src={wifiImg} alt="WiFi" />
                    <img src={batteryImg} alt="Battery" />
                </div>
            </div>
        </div>
    );
};

export default Home;