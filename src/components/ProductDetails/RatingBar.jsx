import React from "react";

const RatingBar = ({ label, score, color }) => {
  return (
    <div className="flex flex-col mb-2 w-full gap-5 font-semibold">
      <div className="flex items-center justify-between">
        <span>{label}</span>
        <span className="ml-2">{score}</span>
      </div>
      <div className="flex items-center">
        <div className="relative w-full h-2 rounded-full bg-gray-300">
          <div
            className="absolute h-full rounded-full"
            style={{ width: `${score * 10}%`, backgroundColor: color }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default RatingBar;
