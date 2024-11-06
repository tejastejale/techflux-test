import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import image from "../assets/image.jpg";
import Card from "./Card";
import Bar from "./Bar";

function Main() {
  const data = [
    {
      name: "Tejas Tejale",
      image: image,
    },
    {
      name: "Shreyash Meshram",
      image: image,
    },
    {
      name: "Aniket Baviskar",
      image: image,
    },
    {
      name: "Prem Hude",
      image: image,
    },
  ];

  return (
    <>
      <div className="pt-10 px-4 sm:pt-16 sm:px-16 lg:px-52 pb-5 lg:pb-20">
        <div className="flex flex-col lg:flex-row justify-between items-center pb-4">
          <div className="flex flex-col text-center lg:text-left">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              Feature <span className="text-pink-600">Profiles</span>
            </p>
            <p className="font-light text-sm sm:text-base lg:text-lg">
              Login for more Search & Connect with the suitable profiles
            </p>
          </div>
          <div className="flex gap-2 mt-4 lg:mt-0">
            <div className="p-2 bg-white border-black border border-solid rounded-full cursor-pointer">
              <FaArrowLeft className="text-sm sm:text-base lg:text-md font-light" />
            </div>
            <div className="p-2 bg-pink-600 border-pink-600 border border-solid rounded-full cursor-pointer">
              <FaArrowRight className="text-sm sm:text-base lg:text-md font-light text-white" />
            </div>
          </div>
        </div>
        <div className="pt-4 flex flex-wrap justify-center gap-4">
          {data.map((item, index) => (
            <Card key={index} name={item.name} image={image} />
          ))}
        </div>
      </div>
      <Bar />
    </>
  );
}

export default Main;
