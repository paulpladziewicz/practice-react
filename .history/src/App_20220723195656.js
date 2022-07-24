import Todo from './components/Todo'
import TodoInput from './components/TodoInput'
import React, { useEffect, useState } from 'react' 

const arr = ['cook', 'clean living room', 'wash dishes', 'make beds', 'take out trash'];

function App() {
  const [data, setData] = useState([]) //useState should have an empty array as param.
  useEffect(() => {
    fetch('http://paulpladziewicz.s3-website.us-east-2.amazonaws.com/data.json')
        .then(res => res.json())
        .then(res => setData(res.data))
 }, [])
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
