import { useState, useEffect } from 'react';
import { Product } from '../components/Product.tsx';

// URL da API para buscar os produtos
const API_URL = 'https://run.mocky.io/v3/10246163-e1c6-46c1-abcf-7b838decf36c';

// Hook personalizado para buscar produtos
const useFetchProducts = (initialCategory: string) => {
    // Estado para armazenar todos os produtos
    const [data, setData] = useState<Product[]>([]);
    // Estado para armazenar os produtos filtrados pela categoria
    const [filteredData, setFilteredData] = useState<Product[]>([]);
    // Estado para armazenar a categoria selecionada
    const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
    // Estado para indicar se os dados estão sendo carregados
    const [loading, setLoading] = useState<boolean>(true);
    // Estado para armazenar possíveis erros
    const [error, setError] = useState<string | null>(null);

    // useEffect para buscar os produtos quando o componente é montado ou a categoria inicial muda
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Faz a requisição para a API
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                // Converte a resposta para JSON
                const data = await response.json();
                setData(data);
                // Filtra os produtos pela categoria inicial e armazena no estado
                const initialFilteredData = data.filter((item: Product) => item.category === initialCategory);
                setFilteredData(initialFilteredData);
            } catch (err: unknown) {
                // Trata possíveis erros
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                // Define o estado de carregamento como falso
                setLoading(false);
            }
        };

        fetchData();
    }, [initialCategory]);

    // Função para filtrar os produtos por categoria
    const handleFilter = (category: string) => {
        setSelectedCategory(category);
        setFilteredData(data.filter((item) => item.category === category));
    };

    // Retorna os estados e a função de filtro
    return { data, filteredData, selectedCategory, handleFilter, loading, error };
};

export default useFetchProducts;