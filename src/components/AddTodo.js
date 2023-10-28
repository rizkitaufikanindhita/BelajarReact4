const AddTodo = (props) => {
  return (
    <div className="items-center justify-center text-center mt-24">
      <h1 className="text-4xl font-bold">Add Todo App</h1>
      <div className="flex mx-60">
        <input
          className="text-2xl w-5/6 bg-white rounded-lg shadow-xl border-2 mt-10 placeholder-gray-500 placeholder-opacity-50 py-3 px-5"
          placeholder="Masukkan Todo..."
          onChange={(e) => props.handleInputTodo(e)}
          value={props.getTodo}
        ></input>
        <button
          className="font-semibold text-2xl w-1/6 bg-blue-600 text-white rounded-lg shadow-xl border-2 mt-10 placeholder-gray-500 placeholder-opacity-50 py-3"
          onClick={() => {
            props.postTodo();
          }}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
