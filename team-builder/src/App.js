import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import DevForm from "./DevForm";

function App(props) {
  // Setting State for our inputs
  const [devName, setDevName] = useState([
    {
      fname: "",
      lname: "",
      devType: ""
    }
  ]);

  const addNewDev = dev => {
    const newDev = setDevName([...devName, dev]);
  };

  return (
    <div className="App">
      <h2>Dev Sign-Up</h2>
      <DevForm addNewDev={addNewDev} />
      <Form devName={devName} />
    </div>
  );
}

export default App;
