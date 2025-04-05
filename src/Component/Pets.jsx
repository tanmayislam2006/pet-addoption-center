import React, { use, useState } from "react";
import Pet from "./Pet";
import AdoptedPet from "./AdoptedPet";

const Pets = ({ fetchPetsData }) => {
  const petsData = use(fetchPetsData);
  const pets = petsData.pets;
  const [adoptedPets, setAdoptedPets] = useState([]);
  const handleAdpot = (adoptedPetsData) => {
    const newAdoptedPets = [...adoptedPets, adoptedPetsData];
    setAdoptedPets(newAdoptedPets);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <h1
        className="text-xl text-red-600
             font-bold text-center"
      >
        Total {pets.length}
      </h1>
      <div className="">
        <h1 className="text-xl text-center my-3 font-bold text-orange-500">Adopted Pet</h1>
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center"><button onClick={()=>setAdoptedPets([])} className="px-4 py-2 rounded-lg bg-gray-300">Clear</button></div>
            {adoptedPets.map(pet=><AdoptedPet key={pet.petId} pet={pet}></AdoptedPet>)}
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-4">
        {pets.map((pet) => (
          <Pet key={pet.petId} pet={pet} handleAdpot={handleAdpot}></Pet>
        ))}
      </div>
    </div>
  );
};

export default Pets;
