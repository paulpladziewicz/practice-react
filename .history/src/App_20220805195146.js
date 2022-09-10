// NOTES: useState (functions like a switch; useEffect (when a component loads))
// - filter and map are critical methods within react

// import Todo from './components/Todo' // no longer needed.
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import React, { useEffect, useState } from 'react'
import styles from './styles/App.module.css'

{/* const arr = ['cook', 'clean living room', 'wash dishes', 'make beds', 'take out trash']; */ }

// abbrev logs to console
const log = console.log;

function App() {
  const [data, setData] = useState([]) //useState should have an empty array as param.

  useEffect(() => {
    fetch('http://paulpladziewicz.s3-website.us-east-2.amazonaws.com/data.json')
      .then(res => res.json())
      .then(res => setData(res.data))
    // dependency arr below: if it is empty, it will perform once when react component renders
  }, []);

  // useEffect(() => {
  //   console.log(data);
  //   // whenever data is changing the data array below will change.
  // }, [data])

  const addTodo = (todo) => {
    const newTodo = {
      id: 0,
      text: todo,
      completed: 0
    };
    setData([...data, newTodo]);
  }

  // 
  const removeTodo = (id) => {
    // log('remove')
    // goal is to reset data, within the array: setup filter method
    // a new array without a specific todo task's id.
    // setData's useState nature will reset the data.
    setData(data.filter((todo) => todo.id !== id));
  }

      // create a new function to update Todo
  const updateTodo = (input, id) => {
    // log('update')
    setData(data.map((todo) => {
      if (todo?.id === id) {
        
      })
    }))
  }

  return (
    <div className={styles['app-container']}>
      <h1>To Do List</h1>
      {/* below onAddTodo is passing the function by reference, not invoking it. */}
      <TodoInput onAddTodo={addTodo} />
      <TodoList listItems={data} onRemoveTodo={removeTodo} updateTodo={updateTodo} />
      {/*Move below to the TodoList component*/}

    </div>
  );
}

export default App;


// passing things around is essential: ask where things go, and what is passing what.