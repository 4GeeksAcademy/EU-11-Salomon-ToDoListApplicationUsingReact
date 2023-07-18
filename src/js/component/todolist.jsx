import React, { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <h1>todos</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
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
                <li
                  key={index}
                  style={{ display: "flex", alignItems: "center" }}
                  className="list-group-item"
                >
                  <span onClick={() =>
                      setTodos(
                        todos.filter((_, currentIndex) => index !== currentIndex)
                      )
                    } style={{ flexGrow: 1 }}>{item}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                    
                  </svg>
                </li>
              ))}
              <div className="todosLeft">
                {todos.length} tasks left
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
