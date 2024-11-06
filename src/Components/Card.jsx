import React from "react";

function Card(props) {
  return (
    <div className="h-80 bg-gradient-to-t from-gray-400 to-white w-60 rounded-xl p-[2px] shadow-md">
      <div className="h-full w-full bg-white rounded-xl flex flex-col justify-center items-start p-4">
        <div className="flex w-full justify-center relative">
          <p className="scale-75 absolute bottom-1 left-2 px-4 py-2 bg-gray-600 text-white font-semibold rounded-full rounded-bl-none">
            Free
          </p>
          <img
            alt="Profile"
            src={props.image}
            className="h-52 w-48 rounded-full rounded-bl-none"
          />
        </div>
        <div className="w-full text-left p-2 pb-0">
          <p className="font-bold">{props.name}</p>
          <p className="text-sm font-light text-gray-500">
            30 years, Nashik, BE
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
