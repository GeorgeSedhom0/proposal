import "./styles/App.css";
import { useState } from "react";
import DevToolsPicker from "./pickers/devToolsPicker";
import SpecialProposalPicker from "./pickers/specialProposalPicker";
import TextAreas from "./textAreas";
import Proposal from "./Proposal";

function App() {
  const [specialProposal, setSpecialProposal] = useState(``);
  const [devTools, setDevTools] = useState("vanilla JavaScript, HTML and CSS");

  const [confedint, setConfedint] = useState(true);

  return (
    <div className="App">
      <DevToolsPicker setDevTools={setDevTools} />
      <SpecialProposalPicker
        setConfedint={setConfedint}
        confedint={confedint}
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
      />
    </div>
  );
}

export default App;
