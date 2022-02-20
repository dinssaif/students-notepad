function Button(props) {
  return (
    <div className=" flex items-center justify-around max-w-2xl mx-auto mt-1 p-1.5 w-full sm:w-auto overflow-hidden bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-700">
      <button
        onClick={props.changeState}
        className=" px-8 py-3 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
      >
        Add Notes
      </button>
      <button
        onClick={props.changemode}
        className=" px-6 py-3 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
      >
        {`${props.smode ? "Light Mode" : "Dark Mode"}`}
      </button>
    </div>
  );
}

export default Button;
