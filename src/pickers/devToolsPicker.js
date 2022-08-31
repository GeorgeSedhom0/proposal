import { useState } from "react";
import "../styles/picker.css";
import { Button } from "@mui/material";

const DevToolsPicker = ({ setDevTools, stack, setStack }) => {
  const [typescript, setTypescript] = useState(true);
  const [currentDevTools, setCurrentDevTools] = useState("vanilla");
  const language = typescript ? "TypeScript" : "JavaScript";

  const picker = {
    vanilla: `${
      language === "JavaScript" ? "Vanilla " : ""
    }${language} , HTML and CSS`,
    react: `React.js with ${language}`,
    backend: `Node.js, Express.js, ${language}`,
  };
  const handleClick = (e) => {
    const text = e.target.innerText.toLowerCase();
    setDevTools(picker[text]);
    setCurrentDevTools(text);
    console.log(text);
  };
  return (
    <div className="picker">
      <div className="custom-radio">
        <label htmlFor={"typescript"}>TypeScript</label>
        <input
          type="checkbox"
          name="typescript"
          onChange={() => {
            setTypescript(!typescript);
          }}
          checked={typescript}
        />
        <label htmlFor={"typescript"}>Full-stack</label>
        <input
          type="checkbox"
          name="typescript"
          onChange={() => {
            stack === "Frontend"
              ? setStack("Full-Stack")
              : setStack("Frontend");
          }}
          checked={stack === "Full-Stack"}
        />
      </div>
      <Button
        variant={"contained"}
        disabled={currentDevTools === "vanilla"}
        onClick={handleClick}
      >
        vanilla
      </Button>
      <Button
        variant={"contained"}
        disabled={currentDevTools === "react"}
        onClick={handleClick}
      >
        react
      </Button>
      <Button
        variant={"contained"}
        disabled={currentDevTools === "backend"}
        onClick={handleClick}
      >
        backend
      </Button>
    </div>
  );
};

export default DevToolsPicker;
