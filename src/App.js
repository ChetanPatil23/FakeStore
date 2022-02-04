import "./App.css";
import Header from "./container/Header";
import ProductListing from "./container/ProductListing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="*">Error</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
