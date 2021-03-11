import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="Content">
        <Switch>
          <Route exact path="/">
          <Home />
          </Route>
          <Route path="/gallery">
          <Gallery />
          </Route>
          <Route path="*">
            {/* The "*" path is for any page or endpoint that the user requests but does not exists. */}
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
