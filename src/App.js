
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import TodoComplete from './components/TodoComplete'
import React, { useEffect, useState } from 'react'
import styles from './styles/App.module.css'

function App() {
  // set data to data.json
  const [data, setData] = useState([]); //
  useEffect(() => {

    fetch('https://d1qy7lc15wxwmt.cloudfront.net/data.json')

      .then(res => res.json())
      .then(res => setData(res.data))
  }, []);

  // todo (text/task action) is made when newTodo is created.
  const addTodo = (todo) => {
    const newTodo = {
      id: data.length + 1,
      text: todo,
      completed: 0
    };
    // take already established data and start to include new todo inputs with same object structure (see addTodo -> newTodo).
    setData([...data, newTodo]);
  }


  const removeTodo = (id) => {
    setData(data.filter((todo) => todo.id !== id));
  }

  const removeAllTodo = () => {
    setData([]);
  }

  // create set strikeTodo within parent component for universal applicability; ? of param pending
  const strikeTodo = (id) => {
    setData(data.filter((todo) => console.log(todo.id, id)))
  }

  const updateTodo = (input, id) => {
    console.log(input, id);
    setData(data.map((todo) => {

      if (todo?.id === id) {
        todo.text = input;
      }

      return todo
    }))
  }


  return (
    <div className="main-container">
      <h1>Tasks Be Gone</h1>
      <div className={styles['app-container']}>
        <h2>Let's Go ...</h2>
        <TodoInput onAddTodo={addTodo} onRemoveAllTodo={removeAllTodo} />
        <TodoList listItems={data} onRemoveTodo={removeTodo} strikeTodo={strikeTodo} updateTodo={updateTodo} />
      </div>
      <br />
      {/* same props as within component */}
      <TodoComplete />

    </div>
  );
}

export default App;
