import './index.css'

const TabItem = props => {
  const {tabDetails, getActiveTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const activeTab = isActive ? 'active-tab-btn' : ' '

  const onActiveTab = () => {
    getActiveTab(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTab}`}
        onClick={onActiveTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
