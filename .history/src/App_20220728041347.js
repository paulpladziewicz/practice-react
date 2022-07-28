// NOTES: useState (functions like a switch; useEffect (when a component loads))

import Todo from './components/Todo'
import TodoInput from './components/TodoInput'
import React, { useEffect, useState } from 'react'

const arr = ['cook', 'clean living room', 'wash dishes', 'make beds', 'take out trash'];

function App() {
  const [data, setData] = useState([]) //useState should have an empty array as param.
  console.log(data);
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
  return (
    <div>
      <h1>To Do List</h1>
      <TodoInput />
      <ul>
        {arr.map(elem => {
          return <Todo item={elem} />
        })}
      </ul>
    </div>
  );
}

export default App;
