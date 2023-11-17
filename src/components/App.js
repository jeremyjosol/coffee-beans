import React from "react";
import Header from "./Header";
import CoffeeBeanControl from "./CoffeeBeanControl";

function App(){
  return ( 
    <React.Fragment>
      <div className="header">
        <Header />
      </div>
      <div className="control">
        <CoffeeBeanControl />
      </div>
    </React.Fragment>
  );
}

export default App;
