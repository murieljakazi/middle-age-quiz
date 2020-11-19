import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import Menu from './components/Menu'
import './App.css';
import MiddleAge from './components/MiddleAge';

class App extends React.Component{

  render () {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/Menu" component={Menu}/>
          <Route path="/MiddleAge" component={MiddleAge} />
        </Switch>
      </div>
    );

  }
}

export default App;
