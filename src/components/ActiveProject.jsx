import Button from "./Button";

const ActiveProject = ({ activeProject, onDeleteProject }) => {
  return (
    <section>
      <h2>{activeProject.title}</h2>
      <p>{activeProject.date}</p>
      <p>{activeProject.description}</p>
      <Button onClick={() => onDeleteProject(activeProject.id)}>Delete</Button>
    </section>
  );
};

export default ActiveProject;
