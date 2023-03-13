// Write your code here
import {Component} from 'react'
import './index.css'

class SuggestionItem extends Component {
  onClickUpdateSearchInput = () => {
    const {eachSuggestion, onArrowChange} = this.props
    const {suggestion} = eachSuggestion
    onArrowChange(suggestion)
  }

  render() {
    const {eachSuggestion} = this.props
    const {suggestion} = eachSuggestion

    return (
      <li className="list-item" onClick={this.onClickUpdateSearchInput}>
        <p className="suggestion-list">{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-image"
        />
      </li>
    )
  }
}

export default SuggestionItem
