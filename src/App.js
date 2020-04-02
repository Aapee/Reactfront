import React from "react";
import Customerlist from "./components/Customerlist";
import Trainings from "./components/Trainings";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/Customer" component={Customerlist} />
          <Route exact path="/Trainings" component={Trainings} />
          <Route exact path="/Calendar" component={() => <div><h3>in progress</h3></div>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
