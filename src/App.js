
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home'


import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router ,Route, Switch } from 'react-router-dom'
import NotFound from './components/pages/NotFound';
import AddUser from './components/pages/AddUser';
import EditUser from './components/pages/EditUser';
import User from './components/pages/User';

function App() {
  return (
   <Router>
     <div className="App">

       <Navbar/> 
       <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path ="/add" component={AddUser}></Route>
        <Route exact path="/edit/:id" component={EditUser}></Route>
        <Route exact path="/user/:id" component={User}></Route>
        
        <Route component={NotFound}></Route>
       
       </Switch>
      
     </div>
  </Router>
  );
}

export default App;
