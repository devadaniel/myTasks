import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './index.css'

import TagItems from '../TagItems'
import TaskItem from '../TaskItem'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class CreateTask extends Component {
  state = {
    inputText: '',
    selectOption: tagsList[0].optionId,
    taskList: [],
    activeTag: 'INITIAL',
  }

  onChangeUserInput = event => {
    this.setState({inputText: event.target.value})
  }

  onChangeOption = event => {
    this.setState({selectOption: event.target.value})
  }

  onSubmitTask = event => {
    event.preventDefault()
    const {inputText, selectOption} = this.state

    const newTask = {
      id: uuidv4(),
      task: inputText,
      tag: selectOption,
    }

    this.setState(prevState => ({
      taskList: [...prevState.taskList, newTask],
      inputText: '',
      selectOption: '',
    }))
  }

  onClickTagItem = id => {
    this.setState(prevState => ({
      activeTag: prevState.activeTag === id ? 'INITIAL' : id,
    }))
  }

  renderTags = () => {
    const {taskList, activeTag} = this.state
    const filterTask =
      activeTag === 'INITIAL'
        ? taskList
        : taskList.filter(each => each.tag === activeTag)

    return (
      <div className="tag-container">
        <h1 className="tags-heading">Tags</h1>
        <ul className="tag-button-items">
          {tagsList.map(eachItem => (
            <TagItems
              key={eachItem.optionId}
              eachTagItem={eachItem}
              onClickTagItem={this.onClickTagItem}
              isActiveTag={activeTag === eachItem.optionId}
            />
          ))}
        </ul>
        <h1 className="task-heading">Tasks</h1>
        <ul className="add-task-items">
          {taskList.length === 0 ? (
            <p className="no-task-text">No Tasks Added Yet</p>
          ) : (
            <ul className="each-task-items">
              {filterTask.map(eachItem => (
                <TaskItem key={eachItem.id} taskItem={eachItem} />
              ))}
            </ul>
          )}
        </ul>
      </div>
    )
  }

  renderCreateTask = () => {
    const {inputText, selectOption} = this.state
    return (
      <div className="create-task-container">
        <h1 className="create-task-heading">Create a task!</h1>
        <form className="form-container" onSubmit={this.onSubmitTask}>
          <label htmlFor="Text" className="task-label">
            Task
          </label>
          <input
            id="Text"
            type="text"
            className="input-task"
            placeholder="Enter the task here"
            onChange={this.onChangeUserInput}
            value={inputText}
          />
          <div className="options-add-task-button">
            <label htmlFor="selectOption" className="task-label">
              Tags
            </label>
            <select
              className="select-options"
              id="selectOption"
              onChange={this.onChangeOption}
              value={selectOption}
            >
              {tagsList.map(each => (
                <option value={each.optionId} key={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>
            <button type="submit" className="add-task-button">
              Add Task
            </button>
          </div>
        </form>
      </div>
    )
  }

  render() {
    return (
      <div className="app-container">
        {this.renderCreateTask()}
        {this.renderTags()}
      </div>
    )
  }
}

export default CreateTask
