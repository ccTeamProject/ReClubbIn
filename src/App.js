import './App.css';
import Canvas from './components/Canvas'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import GenreSelction from './components/GenreSelction';

function App() {
  return (
    <Router>
    <div className="App">

      <Switch>
          
        <Route path="/genres/:genre" component={Canvas}>

          </Route>
          <Route path="/genres">
            <GenreSelction />
          </Route> 

          {/* <Route path="/">
            <OnbordingPage />
          </Route> */}
        </Switch>
    </div>
    </Router>
  );
}

export default App;
