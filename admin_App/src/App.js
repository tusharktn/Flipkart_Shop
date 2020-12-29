import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./containers/home/Home";
import Signin from "./containers/signin/Signin";
import Signup from "./containers/signup/Signup";
import React, { useEffect, useState } from "react";
import PrivateRoute from "./components/higherComponents/PrivateRoute";
function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    if (user != null && user.isLoggedIn) {
      setIsUserLoggedIn(true);
    }
  }, [isUserLoggedIn]);
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
