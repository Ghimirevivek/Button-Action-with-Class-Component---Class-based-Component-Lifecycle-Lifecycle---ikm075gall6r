import React, { Component } from 'react'
import '../styles/App.css'

class App extends Component {
  constructor(props) {
    super(props)

    // Initialize state with a boolean flag to indicate whether the button has been clicked or not
    this.state = {
      buttonClicked: false,
    }

    // Bind the handleClick function to the current instance of the component
    this.handleClick = this.handleClick.bind(this)
  }

  // Event handler function for the button click event
  handleClick() {
    // Set the buttonClicked flag to true, which will trigger a re-render of the component
    this.setState({ buttonClicked: true })
  }

  render() {
    return (
      <div id="main">
        <button id="click" onClick={this.handleClick}>
          Click me
        </button>
        {/* Render the paragraph tag only if the button has been clicked */}
        {this.state.buttonClicked && (
          <p id="para">
            Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy
          </p>
        )}
      </div>
    )
  }
}

export default App
