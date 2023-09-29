import './index.css'

const TagItems = props => {
  const {eachTagItem, onClickTagItem, isActiveTag} = props
  const {optionId, displayText} = eachTagItem
  const activeTabColor = isActiveTag ? 'active-tab-button' : ''

  const onClickTag = () => {
    onClickTagItem(optionId)
  }
  return (
    <li className="tag-list">
      <button
        className={`each-button ${activeTabColor}`}
        type="button"
        onClick={onClickTag}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TagItems
