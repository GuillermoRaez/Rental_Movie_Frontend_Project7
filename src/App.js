
import './App.scss';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';
import Profile from './containers/Profile/Profile';
import Order from './containers/Order/Order';
import Search from './containers/Search/Search';
import Movie from './containers/Movie/Movie';
import Navbar from './components/Navbar/Navbar';
import AdminOrders from './containers/AdminOrders/AdminOrders';
import AdminUsers from './containers/AdminUsers/AdminUsers';
import AdminView from './containers/AdminView/AdminView';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

      <Navbar/>

        <Switch>

          <Route path='/' exact component={Home}/>
          <Route path='/login' exact component={Login}/>
          <Route path="/register" exact component={Register}/>
          <Route path="/profile" exact component={Profile}/>
          <Route path="/order" exact component={Order}/>
          <Route path="/movie" exact component={Movie}/>
          <Route path="/search" exact component={Search}/>
          <Route path="/allorders" exact component={AdminOrders}/>
          <Route path="/allusers" exact component={AdminUsers}/>
          <Route path="/admin" exact component={AdminView}/>

        </Switch>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
