import React, { useState } from "react";
import Form from "./Form";

export default function DevForm(props) {
  // Setting State for our inputs
  const [devName, setDevName] = useState({
    fname: "",
    lname: "",
    typeDev: ""
  });

  // multiple inputs, setting new state
  const onInputChange = event => {
    setDevName({
      ...devName,
      [event.target.name]: event.target.value
    });
  };

  // preventing rerendering of the page
  const onSubmitForm = event => {
    event.preventDefault();
    props.addNewDev(devName);
    setDevName({
      fname: "",
      lname: "",
      devType: ""
    });
  };

  return (
    <form onSubmit={onSubmitForm}>
      <label htmlFor="fname">First Name: </label>
      <input
        name="fname"
        id="fname"
        type="text"
        placeholder="First name"
        onChange={onInputChange}
      />
      <br />
      <label htmlFor="lname">Last Name: </label>
      <input
        name="lname"
        id="lname"
        type="text"
        placeholder="Last Name"
        onChange={onInputChange}
      />
      <br />
      <label htmlFor="">Type:</label>
      <input
        name="devType"
        id="devType"
        type="text"
        placeholder="Type of Dev"
        onChange={onInputChange}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
