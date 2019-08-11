import React from 'react';
import './App.css';

class MyForm extends React.Component {
  // state contains an empty string value and an empty array
  // the empty string value will be used for the input text box 
  // and the array will be used to store todo values
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      data: []
    }
    // telling the handleSubmit function to be bound to this object
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // this function is run when onsubmit occurs on the form
  // it creates a variable that matches the state's array with the addition of whatever was in the input box
  // set state is ran with the new variable, and the input text box is set back to an empty string
  handleSubmit(e) {
    e.preventDefault();
    const data = [...this.state.data, this.state.inputText];
    this.setState({ data, inputText: "" });
  }

  render() {
    // destructured value that is equal to this.state.inputText
    const {inputText} = this.state;
    // generate li's with form state
    const formEntries = this.state.data.map((element, index) => (
      <li key={index} >{element}</li>
    ))

    return [
      // form onSubmit, calls the handleSubmit function defined abov e
      <form onSubmit={this.handleSubmit}>
        {/* input sets state with the input's name value with the elements input value */}
        <input type="text" name="inputText" value={inputText}
          onChange={(e) => this.setState({ [e.target.name]: e.target.value })}></input>
        <button type="submit">Submit</button>
      </form>,
      <ul>
        {formEntries}
      </ul>

    ]
  }

}


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MyForm />
      </div>
    );
  }
}

export default App;
