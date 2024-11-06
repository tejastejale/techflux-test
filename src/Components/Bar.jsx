import React from "react";
import image1 from "../assets/commu.png";
import image2 from "../assets/castes.png";
import image3 from "../assets/map.png";
import image4 from "../assets/gloabe.png";
function Bar() {
  return (
    <div className="flex flex-wrap items-center justify-around bg-gray-300 md:px-40 p-4 shadow-lg md:flex-nowrap md:h-52">
      <div className="flex flex-col items-center text-center m-4 max-w-xs">
        <img src={image1} alt="Languages" className="w-12 mb-2 " />
        <h4 className="text-lg font-semibold text-gray-800">55+ Languages</h4>
        <p className="text-sm text-gray-600">Offering Multilanguage Choices</p>
      </div>

      <div className="flex flex-col items-center text-center m-4 max-w-xs">
        <img src={image2} alt="Castes" className="w-12 mb-2" />
        <h4 className="text-lg font-semibold text-gray-800">11+ Castes</h4>
        <p className="text-sm text-gray-600">Within India & Abroad</p>
      </div>

      <div className="flex flex-col items-center text-center m-4 max-w-xs">
        <img src={image3} alt="Cities" className="w-12 mb-2" />
        <h4 className="text-lg font-semibold text-gray-800">3200+ Cities</h4>
        <p className="text-sm text-gray-600">Across 4 countries of operation</p>
      </div>

      <div className="flex flex-col items-center text-center m-4 max-w-xs">
        <img src={image4} alt="Countries" className="w-12 mb-2" />
        <h4 className="text-lg font-semibold text-gray-800">230 Countries</h4>
        <p className="text-sm text-gray-600">Connecting beyond borders</p>
      </div>
    </div>
  );
}

export default Bar;
