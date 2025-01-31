import React from 'react';
import styles from '../css/search.module.scss';
import { 
    redeImg, 
    wifiImg, 
    batteryImg,
    arrowImg, 
    carrinhoImg,
    headphoneImg,
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

            <div className={styles.menu}>
                <img src={arrowImg} alt="Seta" />
                <h1>Search</h1>
                <img src={carrinhoImg} alt="Carrinho"/>
            </div>
            

            {/* Busca headphone */}
            <input 
                type="text" 
                className={styles.searchIcon}
                placeholder="Search headphone"
            />

            <div className="main">

            </div>

            {/* Produtos populares */}
            <div className={styles.popularProducts}>
            <h2>Popular Products</h2>
                <div className={styles.productCard}>
                    <div className={styles.productImage}>
                        <img src={headphoneImg} alt="TMA-2 Comfort Wireless" />
                    </div>
                    <div className={styles.productInfo}>
                        <h3 className={styles.productName}>TMA-2 Comfort Wireless</h3>
                        <p className={styles.productPrice}>USD 270</p>
                        <div className={styles.rating}>
                            <span className={styles.star}>⭐</span>
                            <span className={styles.ratingValue}>4.6</span>
                            <span className={styles.reviewCount}>3 Reviews</span>
                        </div>
                    </div>
                    <div className={styles.menu}>⋮</div>
                </div>
                <div className={styles.productCard}>
                    <div className={styles.productImage}>
                        <img src={headphoneImg} alt="TMA-2 Comfort Wireless" />
                    </div>
                    <div className={styles.productInfo}>
                        <h3 className={styles.productName}>TMA-2 Comfort Wireless</h3>
                        <p className={styles.productPrice}>USD 270</p>
                        <div className={styles.rating}>
                            <span className={styles.star}>⭐</span>
                            <span className={styles.ratingValue}>4.6</span>
                            <span className={styles.reviewCount}>3 Reviews</span>
                        </div>
                    </div>
                    <div className={styles.menu}>⋮</div>
                </div>
                <div className={styles.productCard}>
                    <div className={styles.productImage}>
                        <img src={headphoneImg} alt="TMA-2 Comfort Wireless" />
                    </div>
                    <div className={styles.productInfo}>
                        <h3 className={styles.productName}>TMA-2 Comfort Wireless</h3>
                        <p className={styles.productPrice}>USD 270</p>
                        <div className={styles.rating}>
                            <span className={styles.star}>⭐</span>
                            <span className={styles.ratingValue}>4.6</span>
                            <span className={styles.reviewCount}>3 Reviews</span>
                        </div>
                    </div>
                    <div className={styles.menu}>⋮</div>
                </div>
            </div>

        </div>
    );
};

export default Home;