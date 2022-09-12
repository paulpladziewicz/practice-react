/* 
NOTES: useState (functions like a switch; useEffect (when a component loads))
- filter and map are critical methods within react
- after a task deletion, the corresponding id should continuously represent the current row placement of each task (i.e. if I delete my second task, my third task should be my second task and so on.)

*/

// ACTUAL APP/FULL PAGE


// import Todo from './components/Todo' // no longer needed.
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import React, { useEffect, useState } from 'react'
import styles from './styles/App.module.css'

// kconst arr = ['cook', 'clean living room', 'wash dishes', 'make beds', 'take out trash'];

// abbrev logs to console
const log = console.log;
// this function is for the actual App.
function App() {
  // destructuring: implementation of useState with an empty array, declared by two variables.
  const [data, setData] = useState([]); //useState should have an empty array as param.
  // implementation of useEffect with a fetch api: retrieving data.json path from aws domain.
  useEffect(() => {
    // useEffect's implementation of fetch: what does it do: fetch is retrieve the data necessary for the app to use via json. 
    fetch('https://d1qy7lc15wxwmt.cloudfront.net/data.json')
      // with the promise, the json method is called.
      // res.json() returns a promise that resolves with the result of parsing the response body text as JSON.
      .then(res => res.json())
      // res.data is passed as a param for setData.
      .then(res => setData(res.data))
    // .then(res => setData(res.data))
    // dependency arr below: if it is empty, it will perform once when react component renders
    // FIGURE OUT WHY THE SECOND PARAMETER OF useEffect IS AN EMPTY ARRAY: what about the dependencies?
  }, []);


  const addTodo = (todo) => {
    log(todo)
    const newTodo = {
      id: data.length + 1, // incrementation in lieu of placeholder (0).
      text: todo,
      completed: 0
    };
    setData([...data, newTodo]);
    // log(newTodo.id)
  }

  // to remove tasks from the data array, an id is passed as a param.
  const removeTodo = (id) => {
    setData(data.filter((todo) => todo.id !== id)); // removes what is clicked.
  }

  // set up button to remove all tasks from todo list
  const removeAllTodo = () => {
    setData([]);
  }

  // create a new function to update Todo
  const updateTodo = (input, id) => {
    setData(data.map((todo) => {
      log(todo.id, id); // (assigned entry id, id of clicked entry)
      if (todo?.id === id) { // requiring a strict match
        todo.text = input; // input replaces previous todo.text
      }
      // return todo // return the element if the if statement does not match.
      return todo
    }))
  }

  // create a new function to strike todo
  const strikeTodo = (todo) => {

  }

  // return statement
  return (
    <div className={styles['app-container']}>
      <h1>To Do List</h1>
      <TodoInput onAddTodo={addTodo} onRemoveAllTodo={removeAllTodo} />
      <TodoList listItems={data} onRemoveTodo={removeTodo} strikeTodo={strikeTodo} updateTodo={updateTodo} />
    </div>
  );
}

export default App;


// passing things around is essential: ask where things go, and what is passing what.