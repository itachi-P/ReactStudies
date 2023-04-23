import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Nanacy Nogonbe', message: '', count: 0};
  }
  
  changeName(name) {
	if (name === "JoJo") {
		this.setState({name: "ジョナサン"});
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
	const characterList = [
      {name: 'Nanacy Nogonbe', message: 'いらっしゃーい'},
      {name: 'JoJo', message: '君がッ泣くまで殴るのをやめないッ！'},
      {name: 'Dio', message: 'このきたならしい阿呆がァーーッ!!'}
    ];
    return (
	<div className="App">
		<body>
			{characterList.map((characterItem) => {
				return <div><p>{characterItem.name} : {characterItem.message}</p></div>})};

			<h1>ようこそ、{this.state.name}！</h1>
			<h2>{this.state.message}</h2>
			<button onClick={() => {this.changeName('JoJo')}}>ぼくはJoJo。ジョナサン=ジョースターだ。</button>
			<button onClick={() => {this.changeName('Dio')}}>俺はDio。いいか、今後必ずディオ様と呼ぶんだッッ！</button>
			
			<h1>Count: {this.state.count}</h1>
			<button onClick={() => {this.countUp()}}>＋</button>
			<button onClick={() => {this.countDown()}}>－</button>
			<button onClick={() => {this.countReset()}}>カウンターリセット</button>
		</body>
    	</div>
    );
  }
}

export default App;
