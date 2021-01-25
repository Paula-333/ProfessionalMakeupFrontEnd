import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { useState, useEffect} from 'react';
import axios from 'axios';

import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './components/Services';
import Gallery from './components/Gallery';

import Login from './containers/Login';
import SignUp from './containers/SignUp';
import Profile from './containers/Profile';
import Appointment from './containers/Appointment';
import WeddingPage from './containers/WeddingPage';
import EventPage from './containers/EventPage';
import PromPage from './containers/PromPage';
import PhotoshootPage from './containers/PhotoshootPage';

import './App.scss';

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token){

      axios.get('http://localhost:3000',{headers:{Authorization:token}})
      .then(res=>setUser(res.data))
    }
  }, [])
  
  /*let initialUser = null;
  try {
    initialUser = JSON.parse(localStorage.getItem('user'));
  } catch (error) {
    console.error(error)
  }
  const [user, setUser] = useState(initialUser);*/
  
  return (
    
    <div className="App">
    
     <BrowserRouter>

     <Header user={user} setUser={setUser}/>

      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/login" children={<Login user={user} setUser={setUser}/>} component={Login} exact></Route>
        <Route path="/signup" component={SignUp} exact/>
        <Route path="/profile" children={<Profile user={user} setUser={setUser}/>} component={Profile} exact></Route>
        <Route path="/appointment" component={Appointment} exact/>
        <Route path="/services" component={Services} exact/>
        <Route path="/gallery" component={Gallery} exact/>
        <Route path="/wedding-page" children={<EventPage user={user} setUser={setUser}/>} component={WeddingPage} exact/>
        <Route path="/event-page"  children={<EventPage user={user} setUser={setUser}/>} component={EventPage} exact/>
        <Route path="/prom-page" children={<EventPage user={user} setUser={setUser}/>} component={PromPage} exact/>
        <Route path="/photoshoot-page" children={<EventPage user={user} setUser={setUser}/>} component={PhotoshootPage} exact/>
      </Switch>

      <Footer/>
      
    </BrowserRouter>

    </div>
  );
}

export default App;
