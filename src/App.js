import React, { Component} from 'react';
import './App.css';
import Person from "./Person/Person.js";

class App extends Component {
    state = {
        persons:[
            {name: 'Max'},
            {name: 'Manu', age: 29},
            {name: 'Alexa', age: 34}
        ]
    }

    switchNameHandler = () => {
        // console.log('was clicked');
        this.setState({
            persons:[
                {name: 'Maximilian'},
                {name: 'Manu', age: 29},
                {name: 'Alexa', age: 40}
            ]
        })
    }

    render() {
      return (
            <div className="App">
                <h1>Hi, I'm React App</h1>
                <p>This is really working!</p>
                <p><button onClick={this.switchNameHandler}>Switch Name</button></p>
                <Person name={this.state.persons[0].name} age = {Math.floor(Math.random() * 30)}> My hobby is: Dance</Person>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
        );
    }
}

export default App;
