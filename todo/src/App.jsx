import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState(["This is work one", "This is work two"]);

  function addWork(work) {
    const updatedTodo = [...todo, work]; // 🟢 spread old todos + new work
    setTodo(updatedTodo);
    console.log(`Added ${work} to the list`, updatedTodo);
  }

  useEffect(() => {
    addWork("Hello I am here");
  }, []); // run only once on mount

  return (
    <>

      <input type="text" />
      {todo.map((item, index) => (
        <h1 key={index}>{item}</h1>
      ))}
    </>
  );
}

export default App;
