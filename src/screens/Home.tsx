import React, { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from '../css/home.module.scss';
import { 
    redeImg, 
    wifiImg, 
    batteryImg, 
    burgerMenuImg, 
    avatarImg, 
    logoImg, 
    headphoneImg, 
    caboImg 
} from '../components/imgImports';
import { Product } from '../components/Product.tsx';
import { auth } from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

const Home: React.FC = () => {
    const [data, setData] = useState<Product[]>([]);
    const [filteredData, setFilteredData] = useState<Product[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("headphones");
    const [userName, setUserName] = useState<string | null>(null);

    // Função para verificar se o usuário está logado
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserName(user.displayName || "Usuário");
            } else {
                setUserName(null);
            }
        });

        return () => unsubscribe();
    }, []);

    // Função para buscar os produtos
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://run.mocky.io/v3/c7325af3-16e3-4706-894e-e4a053ab9933");
            const data = await response.json();
            setData(data);
            const initialFilteredData = data.filter((item: Product) => item.category === "headphones");
            setFilteredData(initialFilteredData);
        };
        fetchData();
    }, []);

    const handleFilter = (category: string) => {
        setSelectedCategory(category);
        setFilteredData(data.filter((item) => item.category === category));
    };

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
                <img src={burgerMenuImg} alt="burguerMenuImg" style={{ width: 'auto', height: 'auto' }} />
                <img src={logoImg} alt="logo" />
                <img src={avatarImg} alt="avatar"/>
            </div>
            <div className={styles.top}>
                <p>Hi, {userName}</p>
                <h1>What are you looking for today?</h1>
                <input 
                    type="text" 
                    className={styles.searchIcon}
                    placeholder="Search headphone"
                    onClick={() => window.location.href = '/search'}
                />
            </div>
            
            <div className={styles.products}>
                <div className={styles.tabMenu}>
                <input
                    type="button"
                    value="HeadPhone"
                    className={selectedCategory === 'headphones' ? styles.active : ''}
                    onClick={() => handleFilter("headphones")}
                    />
                    <input
                    type="button"
                    value="HeadSet"
                    className={selectedCategory === 'headsets' ? styles.active : ''}
                    onClick={() => handleFilter("headsets")}
                    />
                </div>

                {/* Carrosel headphones */}
                <Carousel 
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    rewindWithAnimation={true}
                    partialVisible={true}
                    responsive={{
                        desktop: {
                            breakpoint: { max: 3000, min: 1024 },
                            items: 3,
                            partialVisibilityGutter: 30  
                        },
                        tablet: {
                            breakpoint: { max: 1024, min: 464 },
                            items: 1,
                            partialVisibilityGutter: 30  
                        },
                        mobile: {
                            breakpoint: { max: 464, min: 0 },
                            items: 1,
                            partialVisibilityGutter: 22  
                        }
                    }}
                >
                    {filteredData.map((item) => (
                        <div 
                            key={item.id} 
                            className={styles.banner}
                        >
                            <div>
                                <h2>{item.name}</h2>
                                <a href="#">Shop now →</a>
                            </div>
                            <div>
                                <img src={item.img} alt={item.name} />
                            </div>
                        </div>
                    ))}
                </Carousel>
                
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
                                partialVisibilityGutter: 1
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