import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./containers/home/Home";
import Signin from "./containers/signin/Signin";
import Signup from "./containers/signup/Signup";
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Router>
    </div>
  );
}

export default App;
