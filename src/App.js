import "./styles/App.css";
import { useState } from "react";
import DevToolsPicker from "./pickers/devToolsPicker";
import SpecialProposalPicker from "./pickers/specialProposalPicker";
import TextAreas from "./textAreas";
import Proposal from "./Proposal";

function App() {
  const [specialProposal, setSpecialProposal] = useState(``);
  const [devTools, setDevTools] = useState("vanilla JavaScript, HTML and CSS");
  const [stack, setStack] = useState("Full-Stack");
  const [confedint, setConfedint] = useState(true);

  return (
    <div className="App">
      <DevToolsPicker
        setDevTools={setDevTools}
        stack={stack}
        setStack={setStack}
      />
      <SpecialProposalPicker
        setConfedint={setConfedint}
        confedint={confedint}
        setSpecialProposal={setSpecialProposal}
      />
      <TextAreas
        specialProposal={specialProposal}
        setSpecialProposal={setSpecialProposal}
        devTools={devTools}
        setDevTools={setDevTools}
      />
      <Proposal
        devTools={devTools}
        specialProposal={specialProposal}
        confedint={confedint}
        stack={stack}
      />
    </div>
  );
}

export default App;
