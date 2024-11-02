import { Link } from 'react-router-dom';

function PokemonCard({ pokemon }) {
    const { name, sprites } = pokemon;

    return (
        <div className="group">
            <Link to={`/pokemon/${pokemon.id}`}>
            <div className=" bg-[url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2f899b52-daf8-4098-83fe-5c5e27b69915/d58ix0v-a5801ff6-3fe0-42cc-a1ac-4fb6faed7e88.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJmODk5YjUyLWRhZjgtNDA5OC04M2ZlLTVjNWUyN2I2OTkxNVwvZDU4aXgwdi1hNTgwMWZmNi0zZmUwLTQyY2MtYTFhYy00ZmI2ZmFlZDdlODguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.te3OrujlJmDM4ZS_nnMbXmHMB8EWx62ex1eI86rwHbE')] bg-cover bg-center w-ful aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 p-4">
                <img
                    alt={name}
                    src={sprites.other.dream_world['front_default']}
                    className="h-full w-full object-cover object-center group-hover:opacity-75 poke-img"
                    style={{ objectFit: 'cover' }} // Ensures the image fills the container
                />
            </div>
            </Link>
            {/* <p className="mt-1 text-lg font-medium text-gray-900">{}</p> */}
        </div>
    );
}

export default PokemonCard;