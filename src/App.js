import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'asfa1' ,name: 'Max', age:28},
      { id: 'vasdf1', name:'Miguel',age:29},
      { id: 'asdf11', name: 'Maxi', age:28}
    ],
    otherState: 'dome other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    //const person = Object.assign({},this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;


    this.setState({ persons: persons})
  }

  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
  const style = {
    backgroundColor: 'green',
    color:"white",
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  let persons = null;
  let btnClass='';

  if(this.state.showPersons){
    persons = (
      <div>
        {this.state.persons.map((person, index) => {
          return <Person 
          click ={() => this.deletePersonHandler(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.nameChangedHandler(event, person.id)} />
        })} 
    </div>
    );
    btnClass = classes.Red;
    style.backgroundColor='red';
  }

  const assignedClasses = [];
  if(this.state.persons.length <= 2){
    assignedClasses.push(classes.red);
  }
  if(this.state.persons.length <=1){
    assignedClasses.push(classes.bold);
  }

    return (
      <div className={classes.App}>
       <h1> Hi, I'm a react App </h1>
       <p className={assignedClasses.join(' ')}>This is really work</p>
       <button 
        className={btnClass}
        onClick={this.tooglePersonsHandler}>Toogle Persons</button> 
        {persons}
      </div>
    );
  }
}

export default App;
