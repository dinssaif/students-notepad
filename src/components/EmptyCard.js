import React from "react";

function EmptyCard() {
  return (
    <div className="max-w-2xl mt-1 px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h1 className="text-2xl font-bold text-gray-700 dark:text-white  dark:hover:text-gray-200">
        Notepad is empty
      </h1>
    </div>
  );
}

export default EmptyCard;
