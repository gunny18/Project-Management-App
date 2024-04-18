import Button from "./Button";

const NoProjectCreated = ({ onAddProject }) => {
  return (
    <div>
      <h1>No Project Selected</h1>
      <p>Select a project or get started with a new one</p>
      <Button onClick={onAddProject}>Create new project</Button>
    </div>
  );
};

export default NoProjectCreated;
