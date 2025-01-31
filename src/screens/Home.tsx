import React, { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from '../css/styles.module.scss';

import redeImg from '../img/rede.png';
import wifiImg from '../img/wifi.png';
import batteryImg from '../img/battery.png';
import burguerMenuImg from '../img/burgerMenuIcon.png';
import avatarImg from '../img/Avatar.png';
import logoImg from '../img/audioLogo.png';
import headphoneImg from '../img/headphone.png';
import caboImg from '../img/cabo.png';

interface ResponseData {
    mensagem: string;
}

const Home: React.FC = () => {
    const [, setData] = useState<ResponseData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch("https://run.mocky.io/v3/f9a642eb-e063-4578-bab5-deaf3ca638a2")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erro ao buscar os dados");
                }
                return response.json();
            })
            .then((data: ResponseData) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro: {error}</p>;

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
            <div className={styles.menu}>
                <img src={burguerMenuImg} alt="burguerMenuImg" style={{ width: 'auto', height: 'auto' }} />
                <img src={logoImg} alt="logo" />
                <img src={avatarImg} alt="avatar"/>
            </div>
            <div className={styles.top}>
                <p>Hi, Andrea</p>
                <h1>What are you looking for today?</h1>
                <input 
                    type="text" 
                    className={styles.searchIcon}
                    placeholder="Search headphone"
                />
            </div>
            
            <div className={styles.products}>
                <div className={styles.tabMenu}>
                    <button className={styles.active}>Headphone</button>
                    <button>Headset</button>
                </div>

                {/* Carrosel headphones */}
                <Carousel 
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    rewindWithAnimation={true}
                    partialVisible = { true }
                    responsive={{
                        desktop: {
                            breakpoint: { max: 3000, min: 1024 },
                            items: 3,
                            partialVisibilityGutter : 30  
                        },
                        tablet: {
                            breakpoint: { max: 1024, min: 464 },
                            items: 2,
                            partialVisibilityGutter : 30  
                        },
                        mobile: {
                            breakpoint: { max: 464, min: 0 },
                            items: 1,
                            partialVisibilityGutter : 22  
                        }
                    }}
                >
                    <div className={styles.banner}>
                        <div>
                            <h2>TMA-2 Modular Headphone</h2>
                            <a href="#">Shop now →</a>
                        </div>
                        <img src={headphoneImg} alt="Headphone" />
                    </div>
                    <div className={styles.banner}>
                        <div>
                            <h2>TMA-2 Modular Headphone</h2>
                            <a href="#">Shop now →</a>
                        </div>
                        <img src={headphoneImg} alt="Headphone" />
                    </div>
                    <div className={styles.banner}>
                        <div>
                            <h2>TMA-2 Modular Headphone</h2>
                            <a href="#">Shop now →</a>
                        </div>
                        <img src={headphoneImg} alt="Headphone" />
                    </div>
                </Carousel >
                
                {/* Featured Products */}
                <div className={styles.featuredProducts}>
                        <h3>Featured Products</h3>
                        <a href="#">See All</a>
                    </div>
                    <Carousel 
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        partialVisible={true}
                        focusOnSelect={true}
                        responsive={{
                            tablet: {
                                breakpoint: { max: 1024, min: 464 },
                                items: 2,
                                partialVisibilityGutter: 30  
                            },
                            mobile: {
                                breakpoint: { max: 464, min: 0 },
                                items: 2,
                                partialVisibilityGutter: 12
                            }
                        }}
                    >
                    <div className={styles.productCard}>
                        <img src={headphoneImg} alt="Headphone" />
                        <div>
                            <p>TMA-2 HD Wireless</p>
                            <span>USD 350</span>
                        </div>
                    </div>

                    <div className={styles.productCard}>
                    <img src={caboImg} alt="Cabo" />
                        <div>
                            <p>CO2 - Cable</p>
                            <span>USD 25</span>
                        </div>
                    </div>

                    <div className={styles.productCard}>
                        <img src={headphoneImg} alt="Headphone" />
                        <p>TMA-2 HD Wireless</p>
                        <span>USD 350</span>
                    </div>

                    <div className={styles.productCard}>
                    <img src={caboImg} alt="Cabo" />
                        <p>CO2 - Cable</p>
                        <span>USD 25</span>
                    </div>
 
                </Carousel>
            </div>
        </div>
    );
};

export default Home;