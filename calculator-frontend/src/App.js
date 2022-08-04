// import logo from './logo.svg';
import './App.css';
import KeyPad from "./containers/KeyPad.js"
import DisplayContainer from "./containers/DisplayContainer.js"
function App() {
  return (
    <div id="app">
      <h1>My simple calculator</h1>
      <DisplayContainer />
      <KeyPad />
    </div>
  );
}

export default App;
