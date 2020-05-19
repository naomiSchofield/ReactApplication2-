import React, {Component} from 'react';
import './App.css';
import Student from './Components/Student'
import Movies from './Components/Movies'
import Naomi from './Components/props'

class App extends Component {
  render(){
    return(
      <div> 
        <Student />
        <Movies />
        <Naomi name="Naomi" />
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//      <h1> Hello, World. </h1>
//     </div>
//   );
// }

export default App;

