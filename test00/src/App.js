import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Nanacy Nogonbe', message: "", count: 0};
  }
  
  changeName(name) {
	if (name === "JoJo") {
		this.setState({name: "ジョジョォー"});
		this.setState({message: "萌え尽きるほどニート！"});
	} else if (name === "Dio") {
		this.setState({name: "ディオ様ァーッ"});
		this.setState({message: "オデは人間をやめるじょー！"});
	}
  }

  countUp() {
    this.setState({count: this.state.count + 1});
  }

  countDown() {
	this.setState({count: this.state.count - 1})
  }

  countReset() {
	this.setState({count: 0});
  }
  
  render() {
	console.log(this.state.name);
	console.log(this.state.message);
	console.log(this.state.count);
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
			<h1>ようこそ、{this.state.name}！</h1>
			<h2>{this.state.message}</h2>
			<button onClick={() => {this.changeName('JoJo')}}>ぼくはJoJo。ジョナサン=ジョースターだ。</button>
			<button onClick={() => {this.changeName('Dio')}}>俺はDio。いいか、今後必ずディオ様と呼べッッ！</button>
			
			<h2>
				Count: {this.state.count}
			</h2>
			<button onClick={() => {this.countUp()}}>＋</button>
			<button onClick={() => {this.countDown()}}>−</button>
			<button onClick={() => {this.countReset()}}>リセット</button>
		</body>
    	</div>
    );
  }
}

export default App;
