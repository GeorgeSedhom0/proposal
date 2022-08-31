import { useState } from "react";
import "../styles/picker.css";
import Button from "./../../node_modules/@mui/material/esm/Button/Button";

const SpecialProposalPicker = ({
  setConfedint,
  confedint,
  setSpecialProposal,
}) => {
  const [currentSpecialProposal, setCurrentSpecialProposal] = useState(0);
  const specialProposal = [
    "No special proposal",
    `I underStand that you need a landing page for your project
i would love to work with you on this`,
    `I understand that you want to create a web page for you restaurant
I would love to work on this and create the menus in its own page
so we can create a Qr code for it later on`,
    "Special proposal",
  ];
  const handleClick = (e) => {
    setSpecialProposal(specialProposal[e.target.innerText]);
    setCurrentSpecialProposal(e.target.innerText);
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
        <Button
          onClick={handleClick}
          disabled={currentSpecialProposal === "1"}
          variant="contained"
        >
          1
        </Button>
        <Button
          onClick={handleClick}
          disabled={currentSpecialProposal === "2"}
          variant="contained"
        >
          2
        </Button>
        <Button
          onClick={handleClick}
          disabled={currentSpecialProposal === "3"}
          variant="contained"
        >
          3
        </Button>
      </div>
    </div>
  );
};

export default SpecialProposalPicker;
