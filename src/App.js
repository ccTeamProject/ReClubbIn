import "./App.css";
import Canvas from "./components/Canvas";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import GenreSelection from "./components/GenreSelection";
import OnboardingPage from "./components/OnboardingPage";

function App() {
  return (
    <Router basename='/ReClubbIn'>
      <div className="App">
        <Switch>
          <Route path="/genres/:genre" component={Canvas}></Route>
          <Route path="/genres">
            <GenreSelection />
          </Route>

          <Route path="/">
            <OnboardingPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
