import React, { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="container">
      <h1>My To Do List With React</h1>
      <ul>
        <li>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                setTodos(todos.concat([inputValue]));
                setInputValue("");
              }
            }}
            placeholder="No tasks, add a task"
          />
        </li>
        {todos.map((item, index) => (
          <li key={index} style={{ display: "flex", alignItems: "center" }}>
            <span style={{ flexGrow: 1 }}>{item}</span>
            <i
              className="fas fa-times"
              onClick={() =>
                setTodos(todos.filter((_, currentIndex) => index !== currentIndex))
              }
            ></i>
          </li>
        ))}
      </ul>
      <div>{todos.length} tasks</div>
    </div>
  );
};

export default Home;
