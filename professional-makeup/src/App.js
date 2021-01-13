import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ControlledCarousel from './components/Home/Home';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import Services from './components/Services/Services';
import Gallery from './components/Gallery/Gallery';

import './App.css';

function App() {
  return (
    <div className="App">
    
     <BrowserRouter>

     <Header/>

      <Switch>
        <Route path="/home" component={ControlledCarousel} exact/>
        <Route path="/login" component={Login} exact/>
        <Route path="/signup" component={SignUp} exact/>
        <Route path="/services" component={Services} exact/>
        <Route path="/gallery" component={Gallery} exact/>
      </Switch>

      <Footer/>
      
    </BrowserRouter>

    </div>
  );
}

export default App;
