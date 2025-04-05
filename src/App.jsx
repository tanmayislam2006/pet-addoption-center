import React, { Suspense } from 'react';
import Pets from './Component/Pets';
const Loading = () => {
 return(
  <div className="">
    <img src="./assets/icons8-loading.gif" alt="" />
  </div>
 )
};
const fetchPetsData=fetch("https://openapi.programming-hero.com/api/peddy/pets")
.then(res=>res.json());
const App = () => {
  return (
    <div>
      <Suspense fallback={<h1>Loading............</h1>}>
        <Pets fetchPetsData={fetchPetsData}>
        </Pets>
      </Suspense>
    </div>
  );
};

export default App;