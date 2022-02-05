import "./App.css";
import Header from "./container/Header";
import ProductListing from "./container/ProductListing";
import ProductComponent from "./container/ProductComponent";
import ProductDetail from "./container/ProductDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetail} />
          <Route path="*">404-Page Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
