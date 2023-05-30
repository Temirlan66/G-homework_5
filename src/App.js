import React, { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const raw = localStorage.getItem("todos") || [];
    setTodos(JSON.parse(raw));
  }, []);

  const addItem = () => {
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: title,
    };

    setTodos((prevState) => [...prevState, item]);
    setTitle("");
    console.log(todos);
  };

  const deleteItem = (id) => {
    const array = todos.filter((item) => item.id !== id);
    setTodos(array);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="container">
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <button onClick={addItem}>ADD</button>
      </div>

      <ul className="ul-list">
        {todos.map((item) => {
          return (
            <li key={item.id}>
              {item.value}
              <button onClick={() => deleteItem(item.id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
