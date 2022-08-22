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
  const [data, setData] = useState([]) //useState should have an empty array as param.
  // implementation of useEffect with a fetch api: retrieving data.json path from aws domain.
  useEffect(() => {
    // useEffect's implementation of fetch: what does it do: fetch is retrieve the data necessary for the app to use via json. 
    fetch('http://paulpladziewicz.s3-website.us-east-2.amazonaws.com/data.json')
      // with the promise, the json method is called.
      // res.json() returns a promise that resolves with the result of parsing the response body text as JSON.
      .then(res => res.json())
      // res.data is passed as a param for setData.
      .then(res => setData(res.data))
    // .then(res => setData(res.data))
    // dependency arr below: if it is empty, it will perform once when react component renders
    // FIGURE OUT WHY THE SECOND PARAMETER OF useEffect IS AN EMPTY ARRAY: what about the dependencies?
  }, []);


  // useEffect(() => {
  //   console.log(data);
  //   // whenever data is changing the data array below will change.
  // }, [data])

  // function to add new tasks: todo represents the inputted param
  const addTodo = (todo) => {
    log(todo)
    // newTodo is an object that follows the data.json structure implemented for each task: the text key will have the new input as it's value.
    const newTodo = {
      id: data.length + 1, // incrementation in lieu of placeholder (0).
      text: todo,
      completed: 0
    };
    // once the task is included, the array must be updated through setData, the spread operator and the new input.
    setData([...data, newTodo]);
    // log(newTodo.id)
  }

  // to remove tasks from the data array, an id is passed as a param.
  const removeTodo = (id) => {
    // log('remove')
    // goal is to reset data, within the array: setup filter method
    // a new array without a specific todo task's id.
    // setData's useState nature will reset the data.
    // todo in this function is not the same to as the previous todo task. instead, it functions as a general reference to each element, that is inclusive of the id, text, and completed keys.
    // filter method within setData removes the todo.id that actually matches from the onclick.
    setData(data.filter((todo) => todo.id !== id)); // removes what is clicked.
  }

  // set up button to remove all tasks from todo list
  const removeAllTodo = () => {
    setData([]);
  }

  // create a new function to update Todo
  const updateTodo = (input, id) => {
    // input references what is typed into submit bar; id is the numerical assignation to that entry/text
    // log(input, id);
    // check to see if update is actually happening.
    // log('update')
    // setData arrow function encompasses a if statement that matches the id provided to each entry to the id of the clicked entry, which should be true for each the clicked entry.
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
    // div with class name app-container
    <div className={styles['app-container']}>
      {/* title on page */}
      <h1>To Do List</h1>
      {/* below onAddTodo is passing the function by reference, not invoking it. */}
      {/* input bar passes the addTodo function through a prefixed attribute: onAddTodo -> addTodo */}
      <TodoInput onAddTodo={addTodo} onRemoveAllTodo={removeAllTodo} />
      {/* listed items have a listItems attribute and the data is passed. removeTodo and update Todo are passed too. */}
      <TodoList listItems={data} onRemoveTodo={removeTodo} strikeTodo={strikeTodo} updateTodo={updateTodo} />
      {/*Move below to the TodoList component*/}

    </div>
  );
}
// exports
export default App;


// passing things around is essential: ask where things go, and what is passing what.