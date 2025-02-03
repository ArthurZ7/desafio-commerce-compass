import React, { useState } from 'react';
// Estilos
import styles from './search.module.scss';
// Imagens
import { 
    arrowImg, 
    carrinhoImg,
    starImg,
} from '../../components/imgImports.tsx';
// Hooks
import useFetchProducts from '../../hooks/useFetchProducts.tsx';
// Componentes
import { Product } from '../../components/Product.tsx';
import Header from '../../components/Header.tsx';

const Search: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { data: products, loading, error } = useFetchProducts('headphones');
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

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

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.menu}>
                <img src={arrowImg} alt="Seta" onClick={() => window.location.href = '/home'}/>
                <h1>Search</h1>
                <img src={carrinhoImg} alt="Carrinho"/>
            </div>
            
            {/* Campo de pesquisa */}
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
                                <span className={styles.reviewCount}>
                                    {product.reviews ? `${product.reviews.length} Reviews` : 'No reviews'}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Produtos populares */}
            <div className={styles.popularProducts}>
                <h2>Popular Products</h2>
                {products.slice(0, 3).map((product) => (
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
                                <span className={styles.reviewCount}>
                                    {product.reviews ? `${product.reviews.length} Reviews` : 'No reviews'}
                                </span>
                            </div>
                        </div>
                        <div className={styles.menu}>⋮</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;