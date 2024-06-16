// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImageSlider from './Slider';
import FoodCard from '../components/FoodCard';

const Home = () => {
    const [food, setFood] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:3000/food')
            .then((response) => {
                setFood(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setError('Failed to fetch food data');
                setLoading(false);
            });
    }, []);

    return (
        <div className='p-4 max-w-[1400px] mx-auto mt-16'>
            <div className='w-full'>
                <ImageSlider />  {/* Use the ImageSlider component */}
            </div>

            <div className='rounded-tr-lg rounded-bl-lg bg-gradient-to-l from-green-400 to-green-600 mt-8 h-[40px]
                            flex items-center justify-start my-8 transform hover:scale-110 transition-transform duration-300 ease-in-out'>
                <h1 className='text-2xl my-8 font-bold pl-8 text-white'>Specials Deals</h1>
            </div>

            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {!loading && !error && <FoodCard food={food} />}

            <div className='rounded-tr-lg rounded-bl-lg bg-gradient-to-l from-green-400 to-green-600 mt-8 h-[40px]
                            flex items-center justify-start my-8'>
                <h6 className='text-2xl my-8 font-bold pl-8 text-white'>Trending</h6>
            </div>

            {!loading && !error && <FoodCard food={food} />}
        </div>
    );
};

export default Home;
