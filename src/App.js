import logo from './logo.svg';
import './App.css';
import { clientId } from "./adal"
import jwt_decode from "jwt-decode";


function App() {
  const decoded = jwt_decode(localStorage.getItem(`adal.access.token.key${clientId}`));
  console.log(decoded)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello {decoded.name}
        </a>
      </header>
    </div>
  );
}

export default App;
