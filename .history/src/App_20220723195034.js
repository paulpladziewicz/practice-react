import Todo from './components/Todo'
import TodoInput from './components/TodoInput'
import React

const arr = ['cook', 'clean living room', 'wash dishes', 'make beds', 'take out trash'];

function App() {
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
