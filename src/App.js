import './App.css';
import { useRef, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  const handleAppTodo = () => {
    const text = inputRef.current.value;
    if (text.trim() === "") {
      alert("Please enter a valid task.");
      return;
    }
    const newItem = { completed: false, text: text };
    setTodos([...todos, newItem]);
    inputRef.current.value = "";
  };

  const handleItemDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDeleteItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h2>To Do List</h2>
      <div className="to-do-container">
        <ul>
          {todos.map(({ text, completed }, index) => (
            <li key={index} className={completed ? "done" : ""}>
              <span onClick={() => handleItemDone(index)}>{text}</span>
              <span onClick={() => handleDeleteItem(index)} className="trash">❌</span>
            </li>
          ))}
        </ul>
        <input ref={inputRef} type="text" placeholder="Add a new task" />
        <button onClick={handleAppTodo}>Add</button>
      </div>
    </div>
  );
}

export default App;
