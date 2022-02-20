import React from "react";

function Card(props) {
  return (
    <div className="max-w-2xl mt-1 px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-600 dark:text-gray-400">
          {props.timeNow}
        </span>
        <button
          onClick={props.deleteCard}
          className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
        >
          Delete
        </button>
      </div>

      <div className="mt-2">
        <h1 className="text-2xl font-bold text-gray-700 dark:text-white ">
          {props.title}
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{props.notes}</p>
      </div>
    </div>
  );
}

export default Card;
