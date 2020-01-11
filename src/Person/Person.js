import React  from 'react';
import '../css/person.css';

// function Person(props) {
//     return (
//       <div className="person">
//           <h1>{props.name}</h1>
//           <h1>{props.age}</h1>
//       </div>
//     );
// }

const person = (props) => {
    // return <p>I'm a {props.name} and I am {Math.floor(Math.random() * 30)} years old!</p>
    return (
        <div className="person">
            <p>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    )
};

// Esto es para renderizar el app principal ReactDOM.render(app, document.querySelector('#app'));

export default person;