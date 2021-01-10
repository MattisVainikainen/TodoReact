import React, {useState} from 'react';
import './App.css';

//Imported Components
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App() {
 const [inputText, setInputText] = useState("");
 const [todos, setTodos] = useState([]);
 const [status, setStatus] = useState("all");
 const [filterTodos, setFilterTodos] = useState("[]");

  return (
    <div className="App">
    <header>
      <h1>Incase you forget</h1>
    </header>
    <Form 
    inputText={inputText} 
    todos={todos} 
    setTodos={setTodos} 
    setInputText={setInputText}
    setStatus={setStatus}
    />

    <TodoList 
    todos ={todos} 
    setTodos={setTodos}/>
    </div>
  );
}

export default App;
