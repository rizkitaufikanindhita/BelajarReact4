const DaftarTodo = (props) => {
  return (
    <div className="mx-60 my-20 bg-white rounded-lg shadow-xl border-2 ">
      <div className="flex border-b-2 p-3">
        <div className="w-5/6 text-left text-2xl font-semibold">Todo Title</div>
        <div className="w-1/6 text-2xl ml-72 font-semibold">Action</div>
      </div>
      {props.getTodoList.map((value, index) => {
        return (
          <div className="flex border-b-2 p-3 text-xl">
            <div
              className={`w-10/12 text-left p-2 ${
                value.status ? "line-through text-gray-500 italic" : ""
              }`}
            >
              {value.getTodo}
            </div>
            <button
              className="w-1/12 bg-blue-500 rounded-lg text-white mx-2 p-2"
              onClick={() => {
                props.doneTodo(index);
              }}
            >
              {value.status ? "Undone" : "Done"}
            </button>
            <button
              className="w-1/12 bg-blue-500 rounded-lg text-white mx-2 p-2"
              onClick={() => {
                props.editTodo(index);
              }}
            >
              Edit
            </button>
            <button
              className="w-1/12 bg-red-500 rounded-lg text-white mx-2 p-2"
              onClick={() => {
                props.deleteTodo(index);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default DaftarTodo;
