import logo from './logo.svg';
import './App.css';
import Event from './event';
import Goal from './goal';
import Garage from './list';
import Example from './routing';
//displaying 
const student ={
  name:"ganesha",
  age:22
}
function Student(){
return(
<div>
  <h1>  This is {student.name} </h1>
<h1>  my age {student.age} </h1>
</div>
)


}

function Car(props) {
  return (
<p> This is a {props.color} color car  </p>

  )
}





// javascript 
let name = "system"
// display the variable
function App() {

  return (
    <div className="App">
      {/* <h1> Library management {name} </h1>
    <Car color="red"/>
    <Student/>
    <Event/>
    <Goal isGoal={true} />
    <Garage/> */}
    <Example/>
    </div>
  );
}

export default App;
