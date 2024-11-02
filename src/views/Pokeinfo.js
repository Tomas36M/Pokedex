import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Loader from '../components/Loader';

const typeColor = {
    grass: "#d2f2c2",
    poison: "#f7cdf7",
    fire: "#ffd1b5",
    flying: "#eae3ff",
    water: "#c2f3ff",
    bug: "#e0e8a2",
    normal: "#e6e6c3",
    electric: "#fff1ba",
    ground: "#e0ccb1",
    fighting: "#fcada9",
    psychic: "#ffc9da",
    rock: "#f0e09c",
    fairy: "#ffdee5",
    steel: "#e6eaf0",
    ice: "#e8feff",
    ghost: "#dbbaff",
    dragon: "#c4bdff"
};

function PokemonInfo() {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
                setPokemon(response.data);
            } catch (error) {
                console.error('Error fetching Pokémon data:', error);
            }
        };

        fetchPokemon();
    }, [id]);

    if (!pokemon) return <div><Loader /></div>;

    return (
        <div className="pokemon-info  min-h-screen">
            <Navbar />
            <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden relative mx-2 my-5">
                <div className="p-6 ">
                    <div className="absolute top-2 left-2 text-gray-500 text-lg">#{id.padStart(3, '0')}</div>
                    <h1 className="text-3xl font-bold font-logo text-center mb-4 capitalize">
                        {pokemon.name}
                    </h1>
                    <div className="flex justify-center mb-4">
                        <img className="w-32 h-32" src={pokemon.sprites.front_default} alt={pokemon.name} />
                        <img className="w-32 h-32" src={pokemon.sprites.back_default} alt={pokemon.name} />
                        <img className="w-32 h-32" src={pokemon.sprites.front_shiny} alt={pokemon.name} />
                    </div>
                    <div className="flex justify-center space-x-2 mb-4">
                        {pokemon.types.map((typeInfo, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 rounded-full text-sm"
                                style={{ backgroundColor: typeColor[typeInfo.type.name] }}
                            >
                                {typeInfo.type.name}
                            </span>
                        ))}
                    </div>
                    <div className="text-center mb-4">
                        <p className="mb-2">
                            <span className="font-semibold">Height:</span> {pokemon.height * 10} cm
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Weight:</span> {pokemon.weight / 10} kg
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Base Experience:</span> {pokemon.base_experience}
                        </p>
                    </div>
                    <h2 className="text-2xl font-semibold mb-2">Abilities</h2>
                    <ul className="mb-4">
                        {pokemon.abilities.map((ability, index) => (
                            <li key={index} className="bg-blue-100 p-2 rounded mb-2">
                                {ability.ability.name}
                            </li>
                        ))}
                    </ul>
                    <h2 className="text-2xl font-semibold mb-2">Stats</h2>
                    <div>
                        {pokemon.stats.map((stat, index) => (
                            <div key={index} className="mb-2">
                                <p className="font-semibold">{stat.stat.name}</p>
                                <div className="w-full bg-gray-200 rounded-full h-4 relative">
                                    <div
                                        className="bg-blue-500 h-4 rounded-full"
                                        style={stat.base_stat > 100 ? { width: `100%` } : { width: `${stat.base_stat}%` } }
                                    ></div>
                                    <span className="absolute right-2 top-0 text-sm font-bold">
                                        {stat.base_stat}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonInfo;