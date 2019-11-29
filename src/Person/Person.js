import React from "react";

const Person = ({ name, age, children, changed, click }) => {
  return (
    <div className="Person">
      <p onClick={click}>
        I'm {name} and I am {age} years old
      </p>
      <p>{children}</p>
      <input type="text" onChange={changed} value={name} />
    </div>
  );
};
export default Person;
