import React, { useState } from "react";

const Form = (props) => {
  const { boxColorArray, setBoxColorArray } = props;

  const [color, setColor] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    setBoxColorArray([...boxColorArray, color]);
    setColor("");
  };
  return (
    <div>
      <h1>These Are Your Boxes</h1>
      <form onSubmit={submitHandler} style={{ margin: "20px" }}>
        <div className="search-box">
          <label htmlFor="firstName"></label>
          <input
            placeholder="Choose Color"
            className="input"
            type="text"
            name="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button className="btn">Add</button>
        </div>
      </form>
    </div>
  );
};
export default Form;
