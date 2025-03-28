import React, { use } from 'react';
import Pet from './Pet';
const fetchPetsData=fetch("https://openapi.programming-hero.com/api/peddy/pets")
.then(res=>res.json());

const Pets = () => {
    const petsData=use(fetchPetsData);
    const pets=petsData.pets


    return (
        <div className='flex flex-col items-center justify-center gap-10'>
            <h1 className="text-xl text-red-600
             font-bold text-center">Total {pets.length}</h1>
            <div className="max-w-6xl mx-auto grid grid-cols-3 gap-4">
            {
                pets.map(pet=><Pet key={pet.petId} pet={pet}></Pet>)
             }
            </div>

        </div>
    );
};

export default Pets;