import { useState } from "react";
import "../styles/picker.css";

const SpecialProposalPicker = ({ setConfedint, confedint }) => {
  const picker = {};
  const handleClick = (e) => {
    // setDevTools(picker[e.target.innerText]);
  };
  return (
    <div className="picker right">
      <div className="custom-radio">
        <label htmlFor={"confedint"}>Confedint</label>
        <input
          type="checkbox"
          name="confedint"
          onChange={() => {
            setConfedint(!confedint);
          }}
          checked={confedint}
        />
      </div>
      <button onClick={handleClick}>vanilla</button>
      <button onClick={handleClick}>React</button>
      <button onClick={handleClick}>backend</button>
    </div>
  );
};

export default SpecialProposalPicker;
