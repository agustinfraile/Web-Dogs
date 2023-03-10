import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact/Contact';
import Create from './pages/Create/Create';
import DogDetail from './pages/DogDetail/DogDetail';
import Home from './pages/Home/Home';
import Landing from './pages/Landing/Landing';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path='/' component={ Landing }/>
            <Route exact path='/home' component={ Home }/>
            <Route exact path='/create' component={ Create }/>
            <Route exact path='/contact' component={ Contact }/>
            <Route exact path='/dogs/:id' component={ DogDetail }/>
          </Switch>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
