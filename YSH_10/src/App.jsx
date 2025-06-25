import { useReducer, useState } from "react";
import "./App.css";

const initialTodos = [];

function reducer(todos, action) {
  switch (action.type) {
    case "ADD":
      return [...todos, { id: Date.now(), text: action.text }];
    case "REMOVE":
      return todos.filter((todo) => todo.id !== action.id);
    default:
      return todos;
  }
}

export default function App() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;
    dispatch({ type: "ADD", text });
    setText("");
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="입력"
      />
      <button onClick={handleAdd}>추가</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}{" "}
            <button onClick={() => dispatch({ type: "REMOVE", id: todo.id })}>
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
``;
