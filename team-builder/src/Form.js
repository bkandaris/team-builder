import React from "react";

const Form = props => {
  return (
    <div>
      {props.devName.map(dev => (
        <div key={dev.id}>
          <p>{dev.fname}</p>
          <p>{dev.lname}</p>
          <p>{dev.devType}</p>
        </div>
      ))}
    </div>
  );
};

export default Form;
