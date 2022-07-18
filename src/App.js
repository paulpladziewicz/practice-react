import { Todo } from './components/Todo'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

const arr = ['cook', 'clean living room', 'wash dishes', 'make beds', 'take out trash'];

function App() {
  return (
    <div>
      <h1>To Do List</h1>
      <TodoInput />
      <TodoList />
      {/* Move these todo items to the TodoList parent component */}
      <ul>
      {/* Talk about adding a key to each element / todo item */}
        {arr.map(elem => {
          return <Todo item={elem} />

        })}
      </ul>
    </div>
  );
}

export default App;
