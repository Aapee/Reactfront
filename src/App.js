import React from "react";
import Customerlist from "./components/Customerlist";
import Trainings from "./components/Trainings";

import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Trainings /> */}
      <Customerlist />
      
    </div>
  );
}

export default App;
