import React, { useState } from "react";

const Pet = ({ pet }) => {
  const [like, setLike] = useState(false);
  const handleLikeButton = () => {
    setLike(!like);
  };
  const {
    petId,
    breed,
    category,
    date_of_birth,
    price,
    image,
    gender,
    pet_details,
    vaccinated_status,
    pet_name,
  } = pet;
  console.log(
    petId,
    breed,
    category,
    date_of_birth,
    price,
    image,
    gender,
    pet_details,
    vaccinated_status,
    pet_name
  );
  return (
    <div className="bg-gray-100 p-2 rounded-lg">
      <div className="rounded-lg border p-3 h-54 ">
        <img src={image} alt="" className="rounded-lg w-full h-full  " />
      </div>
      <div className="my-2 bg-white p-3 rounded-lg">
        <h2 className="text-2xl font-bold ">
          {breed != undefined && breed != null ? `${breed}` : "Not Found Name"}
        </h2>
        <p className="my-2 text-lg">
          <span className="font-semibold">Date Of Birth :</span> {date_of_birth}
        </p>
        <p className="my-2 text-lg">
          <span className="font-semibold">Male :</span>
          {gender != undefined && gender != null ? `${gender}` : "Not Found "}
        </p>
        <p className="my-2 text-lg">
          <span className="font-semibold">Price :$</span>
          {price != undefined && price != null ? `${price}` : "Not Found "}
        </p>
        <div className="my-2  py-3 border-t-4 border-gray-300 flex justify-center items-center  gap-4">
          <div className="">
            <button
              onClick={handleLikeButton}
              className="rounded-lg border px-4 py-2"
            >
              {like ? "❤️" : "🤍"}
            </button>
          </div>
          <div className="">
            <button className="text-green-800 bg-slate-100 font-bold rounded-lg px-3 py-2 border">
              Details
            </button>
          </div>
          <div className="">
            <button className="text-green-800 bg-slate-100 font-bold rounded-lg px-3 py-2 border">
              Adopt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pet;
