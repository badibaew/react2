import logo from './logo.svg';
import './App.css';

function AboutUs() {
  return(<div>
    <Title title = "HI mY nwa"/>
  </div>)
}

function Title(props){
  return(
      <div>
        <h1>{
          props.title
        }</h1>
      </div>
  )
}

function App() {
  return (
    <div className="App">
      <AboutUs/>
    </div>
  );
}

export default App;
