import './index.css'

const TodoItem = props => {
  const {uniqueNo, title, deleteTodo} = props
  const onClickDelete = () => {
    deleteTodo(uniqueNo)
  }
  return (
    <li className="todo-item">
      <p className="todo-name">{title}</p>
      <button className="delete-button" type="button" onClick={onClickDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
