import React from 'react';

const AdoptedPet = ({pet}) => {
    console.log(pet);
    return (
        <div>
            <h2>{pet.pet_name?`${pet.pet_name}`:"NAi"}</h2>
        </div>
    );
};

export default AdoptedPet;