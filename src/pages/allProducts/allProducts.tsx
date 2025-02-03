import React, { useState } from 'react';
import styles from './allProducts.module.scss';
// Imagens
import { 
    carrinhoImg,
    arrowImg,
    starImg
} from '../../components/imgImports.tsx';
// Hooks
import useFetchProducts from '../../hooks/useFetchProducts.tsx';
// Componentes
import Header from '../../components/Header.tsx';

const AllProducts: React.FC = () => {
    const [category, setCategory] = useState<'headphones' | 'headsets'>('headphones');
    const [sortBy, setSortBy] = useState<'popularity' | 'newest' | 'oldest' | 'highPrice' | 'lowPrice'>('popularity');
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

    // Estado para controlar a categoria temporária do filtro
    const [tempCategory, setTempCategory] = useState<'headphones' | 'headsets'>('headphones');
    const [tempSortBy, setTempSortBy] = useState<'popularity' | 'newest' | 'oldest' | 'highPrice' | 'lowPrice'>('popularity');

    // Hook para buscar os produtos
    const { filteredData, loading, error } = useFetchProducts(category);

    // Estado para controlar a abertura e fechamento da categoria do filtro
    const handleCategoryFilter = (newCategory: 'headphones' | 'headsets') => {
        setTempCategory(newCategory);
    };
    
    // Estado para controlar a abertura e fechamento da categoria do filtro
    const handleSortFilter = (sortOption: typeof sortBy) => {
        setTempSortBy(sortOption);
    };
    
    // Função para exibir ou esconder o filtro
    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    // Função para aplicar o filtro
    const applyFilter = () => {
        setCategory(tempCategory);
        setSortBy(tempSortBy);
        setIsFilterOpen(false);
    };

    const sortedProducts = [...filteredData].sort((a, b) => {
        switch (sortBy) {
            case 'popularity':
                return (b.reviews?.length || 0) - (a.reviews?.length || 0);
            case 'newest':
                return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
            case 'oldest':
                return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
            case 'highPrice':
                return b.price - a.price;
            case 'lowPrice':
                return a.price - b.price;
            default:
                return 0;
        }
    });

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
                <img src={carrinhoImg} alt="Carrinho"/>
            </div>

            <div className={styles.top}>
                <h1>All Products</h1>
                <button className={styles.filterBtn} onClick={toggleFilter}>
                    Filter
                </button>
            </div>

            {/* Filtro */}
            {isFilterOpen && (
                <div className={styles.filterContainer}>
                    <div className={styles.filterHeader}>
                        <h2>Filter</h2>
                        <button className={styles.closeBtn} onClick={toggleFilter}>X</button>
                    </div>
                    <h3>Category</h3>
                    <div className={styles.categoryFilter}>
                        <button onClick={() => handleCategoryFilter('headphones')} className={tempCategory === 'headphones' ? styles.active : ''}>Headphone</button>
                        <button onClick={() => handleCategoryFilter('headsets')} className={tempCategory === 'headsets' ? styles.active : ''}>Headset</button>
                    </div>
                    <h3>Sort By</h3>
                    <div className={styles.sortBy}>
                        <button onClick={() => handleSortFilter('popularity')} className={tempSortBy === 'popularity' ? styles.active : ''}>Popularity</button>
                        <button onClick={() => handleSortFilter('newest')} className={tempSortBy === 'newest' ? styles.active : ''}>Newest</button>
                        <button onClick={() => handleSortFilter('oldest')} className={tempSortBy === 'oldest' ? styles.active : ''}>Oldest</button>
                        <button onClick={() => handleSortFilter('highPrice')} className={tempSortBy === 'highPrice' ? styles.active : ''}>High Price</button>
                        <button onClick={() => handleSortFilter('lowPrice')} className={tempSortBy === 'lowPrice' ? styles.active : ''}>Low Price</button>
                    </div>
                    <button className={styles.filterBtn} onClick={applyFilter}>Apply Filter</button>
                </div>
            )}

            {/* Lista Produtos */}
            <div className={styles.productList}>
                {sortedProducts.map((product) => (
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