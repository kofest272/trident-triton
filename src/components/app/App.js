import { Component } from 'react';

import './App.css';

import Header from '../title/header/header';
import Main from '../title/main/main';
import Cards from '../cards/cards';
import Credit from '../credit/credit';
import Exchange from '../exchange/exchange';
import ApplyCard from '../applyCard/ApplyCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { cost: [1000, 5000, 2000] },
        { period: [3, 12, 6] },
        { creditNeed: 100000 }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Cards data={this.state.data} />
        <Credit data={this.state.data} />
        <Exchange />
        <ApplyCard />
      </div>
    );
  }
}


export default App;
