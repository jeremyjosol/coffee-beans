import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import CoffeeBeanControl from "./CoffeeBeanControl";

function App() {
  const scrollToControlSection = () => {
    const controlSection = document.getElementById('controlSection');
    if (controlSection) {
      controlSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <React.Fragment>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="header">
        <Header scrollToControlSection={scrollToControlSection} />
      </div>
      <div id="controlSection" className="control">
        <CoffeeBeanControl />
      </div>
    </React.Fragment>
  );
}

export default App;
