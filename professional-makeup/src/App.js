import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import Gallery from './components/Gallery/Gallery';

import Login from './containers/Login';
import SignUp from './containers/SignUp';
import Profile from './containers/Profile';
import Appointment from './containers/Appointment';
import WeddingPage from './containers/WeddingPage';
import EventPage from './containers/EventPage';
import PromPage from './containers/PromPage';
import PhotoshootPage from './containers/PhotoshootPage';

import './App.css';

function App() {
  return (
    <div className="App">
    
     <BrowserRouter>

     <Header/>

      <Switch>
        <Route path="/home" component={Home} exact/>
        <Route path="/login" component={Login} exact/>
        <Route path="/signup" component={SignUp} exact/>
        <Route path="/profile" component={Profile} exact/>
        <Route path="/appointment" component={Appointment} exact/>
        <Route path="/services" component={Services} exact/>
        <Route path="/gallery" component={Gallery} exact/>
        <Route path="/wedding-page" component={WeddingPage} exact/>
        <Route path="/event-page" component={EventPage} exact/>
        <Route path="/prom-page" component={PromPage} exact/>
        <Route path="/photoshoot-page" component={PhotoshootPage} exact/>
      </Switch>

      <Footer/>
      
    </BrowserRouter>

    </div>
  );
}

export default App;
