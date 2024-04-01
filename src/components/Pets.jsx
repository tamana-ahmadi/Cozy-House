import "./Pets.css";

import { PetsCards } from "./PetsCards";
// import React from "react";
// import Slider from "react-slick";

const pets = [
  {
    id: 1,
    image: "../pets-katrine.png",
    title: "Katrine",
  },
  {
    id: 2,
    image: "../pets-jennifer.png",
    title: "Jennifer",
  },
  {
    id: 3,
    image: "../pets-woody.png",
    title: "Woody",
  },
  {
    id: 4,
    image: "../pets-timmy.png",
    title: "Timmy",
  },
];

const Pets = () => {
    
  return (
    <>
      <div className="pets_container">
        <div className="all">
          <div className="pets_layout">
            <div className="pets_title">
              <p>
                Our friends who
                <br /> are looking for a house
              </p>
            </div>

            <div className="cards_container">


              {pets.map((pet) => (
                <PetsCards key={pet.id} image={pet.image} title={pet.title} />
              ))}
          

            </div>
            <div className="get_to">
              <button className="get_to_btn">Get to know the rest</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Pets };
