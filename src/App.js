import AddTodo from "./components/AddTodo";
import DaftarTodo from "./components/DaftarTodo";
import { useState } from "react";

function App() {
  const [getTodo, setTodo] = useState("");
  const [getTodoList, setTodoList] = useState([]);

  // input
  const handleInputTodo = (e) => {
    const dataTodo = e.target.value;
    setTodo(dataTodo);
  };

  // post
  const postTodo = () => {
    if (getTodo === "") {
      alert("Todo tidak boleh kosong");
    } else {
      const newData = { getTodo, status: false };
      setTodoList([...getTodoList, newData]);
      setTodo("");
    }
  };

  // delete
  const deleteTodo = (index) => {
    const newList = getTodoList.filter((value, i) => {
      return i !== index;
    });
    setTodoList(newList);
  };

  // done
  const doneTodo = (index) => {
    const cloneTodoList = [...getTodoList];
    cloneTodoList[index].status = !cloneTodoList[index].status;
    setTodoList(cloneTodoList);
  };

  // edit
  const editTodo = (index) => {
    const cloneTodoList = [...getTodoList];
    const newTodo = prompt(cloneTodoList[index].getTodo);
    if (newTodo === null || newTodo === "") {
      alert("Todo tidak boleh kosong");
    } else {
      cloneTodoList[index].getTodo = newTodo;
      setTodoList(cloneTodoList);
    }
  };

  return (
    <div className="App">
      <AddTodo
        getTodo={getTodo}
        getTodoList={getTodoList}
        handleInputTodo={handleInputTodo}
        postTodo={postTodo}
      />
      <DaftarTodo
        getTodo={getTodo}
        getTodoList={getTodoList}
        deleteTodo={deleteTodo}
        doneTodo={doneTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default App;
