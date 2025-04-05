import React from 'react';

const AdoptedPet = ({pet}) => {
    return (
        <div className='bg-gray-100 grid grid-cols-3 my-2 rounded-lg p-3 border '>
            <div className="w-2/6 flex justify-center items-center"><img src={pet.image} alt="" /></div>
            <div className="flex justify-center items-center text-xl font-bold">{pet.pet_name}</div>
            <div className="flex justify-center items-center text-xl font-bold">{pet.price}</div>
        </div>
    );
};

export default AdoptedPet;