import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import Game from './Game';

function App() {
  return (
    <div className="App">
      <Switch>        
        <Route path="/:token">
          <Game />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
