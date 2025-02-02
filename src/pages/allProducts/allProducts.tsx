import React from 'react';
import styles from './allProducts.module.scss';
import { 
    redeImg, 
    wifiImg, 
    batteryImg, 
    carrinhoImg,
    arrowImg,
    starImg
} from '../../components/imgImports.tsx';
import useFetchProducts from '../../hooks/useFetchProducts.tsx';

const AllProducts: React.FC = () => {
    const { filteredData, selectedCategory, handleFilter, loading, error } = useFetchProducts("headphones");

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

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
                <img src={arrowImg} alt="Seta" onClick={() => window.location.href = '/home'}/>
                <img src={carrinhoImg} alt="Carrinho"/>
            </div>

            <div className={styles.top}>
                <h1>All Products</h1>
                <button className={styles.filterBtn} onClick={() => window.location.href = ''}>
                    Filter
                </button>
            </div>

            {/* Lista Produtos */}
            <div className={styles.productList}>
                {filteredData.map((product) => (
                    <div key={product.id} className={styles.banner}>
                        <div>
                            <img src={product.img} alt={product.name} />
                        </div>
                        <div className={styles.productInfo}>
                            <h3 className={styles.productName}>{product.name}</h3>
                            <p className={styles.productPrice}>USD {product.price}</p>
                            <div className={styles.rating}>
                                <div>
                                    <span className={styles.star}><img src={starImg} alt="estrela" /></span>
                                    <span className={styles.ratingValue}>
                                        {product.reviews && product.reviews.length > 0 ? product.reviews[0].rating : 'No rating'}
                                    </span>
                                </div>
                                <span className={styles.reviewCount}>
                                    {product.reviews ? `${product.reviews.length} Reviews` : 'No reviews'}
                                </span>
                                <span className={styles.menu}>⋮</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllProducts;