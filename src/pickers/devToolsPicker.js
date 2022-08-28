import { useState } from "react";
import "../styles/picker.css";

const DevToolsPicker = ({ setDevTools }) => {
  const [typescript, setTypescript] = useState(true);
  const language = typescript ? "TypeScript" : "JavaScript";

  const picker = {
    vanilla: `${
      language === "JavaScript" ? "Vanilla " : ""
    }${language} , HTML and CSS`,
    React: `React.js with ${language}`,
    backend: `Node.js, Express.js, ${language}`,
  };
  const handleClick = (e) => {
    setDevTools(picker[e.target.innerText]);
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
      </div>
      <button onClick={handleClick}>vanilla</button>
      <button onClick={handleClick}>React</button>
      <button onClick={handleClick}>backend</button>
    </div>
  );
};

export default DevToolsPicker;
