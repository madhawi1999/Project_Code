import logo from './logo.svg';
import './App.css';
import Part1 from './components/Part1';
import Home from './pages/Home';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import About from './pages/About';
import Categories from './pages/Categories';
import NavBar from './components/Navigation/NavBar';
//import Fish_Tank from './pages/C_Pages/Fish_Tank';
//import Fish from './pages/C_Pages/Fish';
//import Food from './pages/C_Pages/Food';
import LoginPage from './pages/LoginPage';
import SignUp from './pages/SignUp';
 
function App() {
  return (
    <Router>
      <div>
        <Switch>

          <Route exact path = "/"><Home/></Route>
          <Route path = "/About"><About/></Route>
          <Route path = "/Categories"><Categories/></Route>
          <Route path = "/Loginpage"><LoginPage/></Route>
          <Route path = "/SignUp"><SignUp/></Route>

          

        </Switch>
      </div>
    </Router>
  );
}

export default App;
