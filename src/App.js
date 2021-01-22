import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/index";
import SigninPage from "./pages/signin";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
