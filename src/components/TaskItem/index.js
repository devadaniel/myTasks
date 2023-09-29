import './index.css'

const TaskItem = props => {
  const {taskItem} = props
  return (
    <li className="task-list-items">
      <div className="task-list-container">
        <p className="task-text">{taskItem.task}</p>
        <p className="task-tag">{taskItem.tag}</p>
      </div>
    </li>
  )
}

export default TaskItem
