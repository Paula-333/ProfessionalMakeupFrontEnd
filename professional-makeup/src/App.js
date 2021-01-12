
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome'

import './App.css';

function App() {
  return (
    <div className="App">
    
     <BrowserRouter>
     <Header></Header>
      <Switch>
        <Route path="/welcome" component={Welcome} exact/>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
