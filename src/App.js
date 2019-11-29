import React, { Component } from "react";
import Person from "./Person/Person";
class App extends Component {
  state = {
    persons: [
      { id: "abc", name: "Max", age: 23 },
      { id: "aac", name: "Peter", age: 24 },
      { id: "bbb", name: "Jane", age: 25 }
    ],
    otherState: "some other value",
    showPersons: false
  };
  showPersonsHandler = () => {
    const show = this.state.showPersons;
    this.setState({
      showPersons: !show
    });
  };
  deletePersonHandler = id => {
    const persons = this.state.persons.filter(person => person.id !== id);
    this.setState({
      persons: persons
    });
  };
  nameChangedHandler = (e, index) => {
    const persons = [...this.state.persons];
    const person = { ...persons[index] };
    person.name = e.target.value;
    persons[index] = person;
    this.setState({ persons });
  };
  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={index}
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(person.id)}
                changed={e => this.nameChangedHandler(e, index)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
    }
    return (
      <div className="App">
        <h1>React App</h1>
        <button onClick={this.showPersonsHandler} style={style}>
          {this.state.showPersons ? "Hide Persons" : "Show Persons"}
        </button>

        {persons}
      </div>
    );
  }
}

export default App;
