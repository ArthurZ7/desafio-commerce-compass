import React, { useState, useEffect  } from 'react';
import styles from '../css/search.module.scss';
import { 
    redeImg, 
    wifiImg, 
    batteryImg,
    arrowImg, 
    carrinhoImg,
    headphoneImg,
    starImg,
} from '../components/imgImports';
import { Product } from '../components/Product.tsx';

const API_URL = 'https://run.mocky.io/v3/c7325af3-16e3-4706-894e-e4a053ab9933';

const Home: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Buscar produtos da API quando o componente carregar
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error("Erro ao carregar os produtos.");
                }
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("An unknown error occurred.");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // Função para lidar com a pesquisa
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchTerm(value);

        if (value.trim() === '') {
            setFilteredProducts([]); // Se estiver vazio, limpar a lista
            return;
        }

        // Filtrar produtos pelo nome digitado
        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredProducts(filtered);
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
                <img src={arrowImg} alt="Seta" />
                <h1>Search</h1>
                <img src={carrinhoImg} alt="Carrinho"/>
            </div>
            

            {/* Campo de pesquisa*/}
            <input 
                type="text" 
                className={styles.searchIcon}
                placeholder="Search headphone"
                value={searchTerm}
                onChange={handleSearch}
            />

            {/* Exibição dinâmica dos produtos filtrados */}
            <div className={styles.productList}>
                {filteredProducts.map((product) => (
                    <div key={product.id} className={styles.productCard}>
                        <div className={styles.productImage}>
                            <img src={product.img} alt={product.name} />
                        </div>
                        <div className={styles.productInfo}>
                            <h3 className={styles.productName}>{product.name}</h3>
                            <p className={styles.productPrice}>USD {product.price}</p>
                            <div className={styles.rating}>
                                <span className={styles.star}><img src={starImg} alt="estrela" /></span>
                                <span className={styles.ratingValue}>
                                    {product.reviews && product.reviews.length > 0 ? product.reviews[0].rating : 'No rating'}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
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
                            <span className={styles.star}><img src={starImg} alt="estrela" /></span>
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
                            <span className={styles.star}><img src={starImg} alt="estrela" /></span>
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
                            <span className={styles.star}><img src={starImg} alt="estrela" /></span>
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