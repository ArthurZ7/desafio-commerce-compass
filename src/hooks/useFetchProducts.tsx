import { useState, useEffect } from 'react';
import { Product } from '../components/Product.tsx';

// const API_URL = 'https://run.mocky.io/v3/c7325af3-16e3-4706-894e-e4a053ab9933';
const API_URL = 'https://run.mocky.io/v3/10246163-e1c6-46c1-abcf-7b838decf36c';

const useFetchProducts = (initialCategory: string) => {
    const [data, setData] = useState<Product[]>([]);
    const [filteredData, setFilteredData] = useState<Product[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setData(data);
                const initialFilteredData = data.filter((item: Product) => item.category === initialCategory);
                setFilteredData(initialFilteredData);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [initialCategory]);

    const handleFilter = (category: string) => {
        setSelectedCategory(category);
        setFilteredData(data.filter((item) => item.category === category));
    };

    return { data, filteredData, selectedCategory, handleFilter, loading, error };
};

export default useFetchProducts;