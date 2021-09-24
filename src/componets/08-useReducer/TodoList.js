import { TodoItem } from './TodoItem'

export const TodoList = ({ todos, handleToggle, handleDelete }) => {
  return (
    <ul className="list-group list-group-flush">
      {
        todos.map((todo, i) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
            index={i}
          ></TodoItem>
        ))
      }
    </ul>
  )
}
