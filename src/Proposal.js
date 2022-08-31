import { useLayoutEffect } from "react";

const Proposal = ({ devTools, specialProposal, confedint, stack }) => {
  const confidance = confedint
    ? "I'm confident I can handle your request"
    : "I can work on your request";

  useLayoutEffect(() => {
    const proposal = document.querySelector(".proposal");
    const copied = document.querySelector("#copied");
    const copy = () => {
      navigator.clipboard.writeText(proposal.innerText);
      copied.style.display = "block";
      setTimeout(() => {
        copied.style.display = "none";
      }, 1000);
    };
    proposal.addEventListener("click", copy);
    return () => {
      proposal.removeEventListener("click", copy);
    };
  });

  return (
    <div className="proposal">
      Good evening,
      <br />
      My name is George and I'm Udacity graduate {stack} web developer <br />
      {confidance} using {devTools} <br />
      {specialProposal} <br />
      Thanks for taking the time to read my offer <br />
      feel free to contact me with any further questions
      <span id="copied">Copied!</span>
    </div>
  );
};
export default Proposal;
