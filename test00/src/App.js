import logo from './logo.svg';
import './App.css';

function App() {
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
          Learn React
        </a>
      </header>
	  <body>
		<h1>Hello, React!</h1>
		<h2>hogehoge</h2>
		<h3>FizzBuzz</h3>
		<p>fugafuga</p>
	  </body>
    </div>
  );
}

export default App;