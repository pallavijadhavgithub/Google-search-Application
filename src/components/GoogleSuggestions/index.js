// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onArrowChange = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const searchResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="main-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="google-logo"
          alt="google logo"
        />

        <div className="middle-container">
          <div className="search-item">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="icon-image"
            />
            <input
              type="search"
              className="input-element"
              onChange={this.onSearch}
              placeholder="Search Google"
              value={searchInput}
            />
          </div>
          <ul>
            {searchResults.map(eachSuggestion => (
              <SuggestionItem
                eachSuggestion={eachSuggestion}
                key={eachSuggestion.id}
                onArrowChange={this.onArrowChange}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
