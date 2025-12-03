import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const films = [
    {
        id: 1,
        title: "Film 1",
        description: "Description du film 1",
        image: "https://via.placeholder.com/150"
    },
    {
        id: 2,
        title: "Film 2",
        description: "Description du film 2",
        image: "https://via.placeholder.com/150"
    },
    {
        id: 3,
        title: "Film 3",
        description: "Description du film 3",
        image: "https://via.placeholder.com/150"
    }
]

export const AccueilFilm: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-[#1d4b1d] to-[#123412]">
            <h1 className='text-center text-7xl font-bold text-white'>Bienvenue sur NetFlop</h1>
            <p className='text-center text-2xl font-bold text-white mb-20'>Découvrez des milliers de films et séries</p>


            <div>
                <h1 className='text-center text-4xl font-bold text-white'>Recommandations</h1>
                <div className="grid grid-cols-3 gap-8 p-10">
                    {films.map((film) => (
                        <div key={film.id} className="flex flex-col items-center bg-black/50 p-4 rounded-lg hover:scale-105 transition-transform duration-300">
                            <img src={film.image} alt={film.title} className="rounded-md mb-4" />
                            <h2 className="text-xl font-bold text-white mb-2">{film.title}</h2>
                            <p className="text-gray-300 text-center mb-4">{film.description}</p>
                            <button className={"btn-identification"} onClick={() => navigate("/details")}>détails</button>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-8 mb-12">
                    <button className="btn-identification hover:bg-[#4CAF50] hover:text-black hover:shadow-[0_0_15px_rgba(76,175,80,0.5)] transition-all duration-300 transform hover:scale-105 px-6 py-2">
                        Plus de films
                    </button>
                </div>
            </div>

            <div>
                <h1 className='text-center text-4xl font-bold text-white'>Films plus populaires et récents</h1>
                <div className="grid grid-cols-3 gap-8 p-10">
                    {films.map((film) => (
                        <div key={film.id} className="flex flex-col items-center bg-black/50 p-4 rounded-lg hover:scale-105 transition-transform duration-300">
                            <img src={film.image} alt={film.title} className="rounded-md mb-4" />
                            <h2 className="text-xl font-bold text-white mb-2">{film.title}</h2>
                            <p className="text-gray-300 text-center">{film.description}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-8 mb-12">
                    <button className="btn-identification hover:bg-[#4CAF50] hover:text-black hover:shadow-[0_0_15px_rgba(76,175,80,0.5)] transition-all duration-300 transform hover:scale-105 px-6 py-2">
                        Plus de films
                    </button>
                </div>
            </div>

        </div>
    );
};