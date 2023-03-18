import React, { Component } from 'react'
import '../styles/App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isClicked: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({ isClicked: true })
  }

  render() {
    return (
      <div id="main">
        {/* Add conditional rendering based on state */}
        {this.state.isClicked && (
          <p id="para">
            Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy
          </p>
        )}
        {/* Add button with onClick event to update state */}
        <button id="click" onClick={this.handleClick}>
          Click me
        </button>
      </div>
    )
  }
}

export default App
