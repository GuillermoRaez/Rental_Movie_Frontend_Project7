
import './App.scss';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>

          <Route path='/' exact component={Home}/>
          <Route path='/login' exact component={Login}/>

        </Switch>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
