const TextAreas = ({
  specialProposal,
  setSpecialProposal,
  devTools,
  setDevTools,
}) => {
  return (
    <>
      <textarea
        type={"text"}
        value={specialProposal}
        onChange={(e) => {
          setSpecialProposal(e.target.value);
        }}
        placeholder={"Special Proposal"}
      />
      <textarea
        type={"text"}
        value={devTools}
        onChange={(e) => {
          setDevTools(e.target.value);
        }}
        placeholder={"Dev Tools"}
      />
    </>
  );
};
export default TextAreas;
