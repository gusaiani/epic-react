// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  const usernameInputRef = React.useRef()

  const [validationError, setValidationError] = React.useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    alert(event.target.elements.usernameInput.value)
  }

  function handleInputChange(event) {
    const {value} = event.target
    setValidationError(value !== value.toLowerCase())
  }

  function handleSubmitWithRef(event) {
    event.preventDefault()
    alert(usernameInputRef.current.value)
  }

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="usernameInput">Username:</label>
          <input type="text" id="usernameInput" />
        </div>
        <button type="submit">Submit</button>
      </form>
      <form onSubmit={handleSubmitWithRef}>
        <div>
          <label htmlFor="usernameInput">Username:</label>
          <input
            onChange={handleInputChange}
            ref={usernameInputRef}
            type="text"
            id="usernameInput"
          />
          {validationError && <span>Username must be all lowercase</span>}
        </div>
        <button type="submit" disabled={validationError}>
          Submit
        </button>
      </form>
    </React.Fragment>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
