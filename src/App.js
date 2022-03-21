import React, {useState} from 'react';
import './App.css';
import Todolist from './components/Todolist';
import Todotable from './components/Todotable';

function App() {
  const [addtodo, setAddTodo] = useState({desc: '', date: ''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setAddTodo({...addtodo, [event.target.name]: event.target.value});
  }

    const lisaaTodo = (event) => {
      event.preventDefault();
      setTodos([...todos, addtodo]);

  }
  const poistaTodo = (i) => {
    setTodos(todos.filter((todo,index) => i !== index));
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Simple Todo-list</p>
      </header>
        
        
        <form onSubmit={lisaaTodo} onChange={inputChanged} >
        <Todotable todos={todos} lisaaTodo={lisaaTodo} />
        </form>

        <form onSubmit={poistaTodo} >
        <Todolist todos={todos} poistaTodo={poistaTodo} />
        </form>

      
    </div>
  );
}

export default App;
