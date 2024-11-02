import { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from '../components/PokemonCard';
import Masonry from 'react-masonry-css';
import Navbar from '../components/Navbar';
import {Pagination} from '../components/Pagination'
import Loader from '../components/Loader';

const generations = {
    1: { limit: 151, offset: 0 },
    2: { limit: 100, offset: 151 },
    3: { limit: 135, offset: 251 },
    4: { limit: 108, offset: 386 },
    5: { limit: 155, offset: 494 },
};

function Home() {
    const breakpointColumnsObj = { default: 6, 1100: 3, 700: 2, 500: 1 };

    const [search, setSearch] = useState('');
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentGeneration, setCurrentGeneration] = useState(1);

    const fetchData = async (generation) => {
        setLoading(true);
        const { limit, offset } = generations[generation];
        const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

        try {
            const response = await axios.get(url);
            const results = response.data.results;

            const pokeDataPromises = results.map(async (e) => {
                const data = await axios.get(e.url);
                return data.data;
            });

            const allPokedata = await Promise.all(pokeDataPromises);
            setPokemons(allPokedata);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(currentGeneration);
    }, [currentGeneration]);

    const filteredPokemons = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
    );

    const handleNextGeneration = () => {
        if (currentGeneration < Object.keys(generations).length) {
            setCurrentGeneration(currentGeneration + 1);
        }
    };

    const handlePreviousGeneration = () => {
        if (currentGeneration > 1) {
            setCurrentGeneration(currentGeneration - 1);
        }
    };

    return (
        <div className="App">
            <Navbar onSearchChange={setSearch} />
            <Pagination handleNextGeneration={handleNextGeneration} handlePreviousGeneration={handlePreviousGeneration} currentGeneration={currentGeneration} loading={loading} generations={generations} />
            {loading ? (
                <div>
                    <Loader />
                </div>
            ) : (
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid px-5"
                    columnClassName="my-masonry-grid_column"
                >
                    {filteredPokemons.map((pokemon, index) => (
                        <PokemonCard key={index} pokemon={pokemon} />
                    ))}
                </Masonry>
            )}
            <Pagination className='pb-5' handleNextGeneration={handleNextGeneration} handlePreviousGeneration={handlePreviousGeneration} currentGeneration={currentGeneration} loading={loading} generations={generations} />
        </div>
    );
}

export default Home;