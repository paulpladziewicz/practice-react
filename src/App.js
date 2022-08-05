// NOTES: useState (functions like a switch; useEffect (when a component loads))


// imports from files and packages
import Todo from './components/Todo'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import React, { useEffect, useState } from 'react'
import styles from './styles/App.module.css'

// const arr = ['cook', 'clean living room', 'wash dishes', 'make beds', 'take out trash'];

// function for actual App
function App() {
  // two variables are declared using useState (see destructuring); useState in this file derives from the above react import
  const [data, setData] = useState([]) //useState should have an empty array as param.

  // ***RETURN TO THIS: HOW IS THE Fetch API WORKING WITHIN THE useEffect HOOK?
  // use effect uses the fetch API to procure the data 
  useEffect(() => {
    fetch('http://paulpladziewicz.s3-website.us-east-2.amazonaws.com/data.json')
      .then(res => res.json())
      .then(res => setData(res.data))
    // dependency arr below: if it is empty, it will perform once when react component renders
  }, []);
  // LOOK INTO THIS TOO
  // useEffect(() => {
  //   console.log(data);
  //   // whenever data is changing the data array below will change.
  // }, [data])
  // this Add todo function creates an object of new todo inputs that have an id, text, and completed properties (or key-value pairs).
  const addTodo = (todo) => {
    const newTodo = {
      id: 0,
      text: todo,
      completed: 0
    };
    /*
    setData function is called/executed with:
    1. the spread operator used for the previous data, then
    2. the new data inputs
    */
    setData([...data, newTodo]);
  }

  // function to remove todo list item.
  const removeTodo = () => {

  }

  /* this return statement provides:
  1. a div with an app-container class that will be styled through the styles folder
  2. a h1 tag for the title on the page
  3. set up input component and pass addTodo into onAddTodo
  4. set up list component and pass data into listItems
  */
  return (
    <div className={styles['app-container']}>
      <h1>To Do List</h1>
      {/* below onAddTodo is passing the function by reference, not invoking it. */}
      <TodoInput onAddTodo={addTodo} />
      <TodoList listItems={data} />
      {/*Move below to the TodoList component*/}

    </div>
  );
}
// export App as default
export default App;


// passing things around is essential: ask where things go, and what is passing what.