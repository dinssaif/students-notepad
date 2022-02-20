function Input(props) {
  return (
    <div>
      <section className=" max-w-2xl mt-1 p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-white">
          Take a note...
        </h2>

        <form>
          <div className="  sm:grid-cols-2">
            <div>
              <input
                onChange={props.titleValue}
                placeholder={"Title"}
                id="username"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-slate-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
              <textarea
                placeholder={"Details"}
                onChange={props.notesValue}
                id="note"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-slate-300  rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              onClick={props.submitForm}
              className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Input;
