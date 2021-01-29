import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import './App.scss'

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
  
  //const [isLoged, setIsLoged] = useState(true)
  useEffect(() => {
    const token = localStorage.getItem('access_token');
  
    if(token){

      const res = axios.get('http://localhost:3000',{headers:{Authorization:token}})
      console.log(res)
      .then(res=>setUser(res.data))
      //localStorage.setItem('acess_token');

    }
    
  }, [])

  

 // const handleLogin = () => {
   // if (isLoged){
     //   setIsLoged(true)
       // console.log(isLoged)
   // } else {
     //   setIsLoged(false)
    //}
//}
  
  
  return (
    
    <Fragment>
    
     <BrowserRouter>
     <Header user={user} setUser={setUser} />
     

      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/login" children={<Login user={user} setUser={setUser} /> } component={Login} exact>
        </Route>
        <Route path="/signup" component={SignUp} exact/>
        <Route path="/profile" children={<Profile user={user} setUser={setUser}/>} component={Profile} exact></Route>
        <Route path="/appointment" component={Appointment} exact/>
        <Route path="/services" component={Services} exact/>
        <Route path="/gallery" component={Gallery} exact/>
        <Route path="/wedding-page" children={<WeddingPage user={user} setUser={setUser}/>} component={WeddingPage} exact/>
        <Route path="/event-page"  children={<EventPage user={user} setUser={setUser}/>} component={EventPage} exact/>
        <Route path="/prom-page" children={<PromPage user={user} setUser={setUser}/>} component={PromPage} exact/>
        <Route path="/photoshoot-page" children={<PhotoshootPage user={user} setUser={setUser}/>} component={PhotoshootPage} exact/>
      </Switch>

      <Footer/>
      
    </BrowserRouter>

    </Fragment>
  );
}

export default App;
