import Button from "./Button";
import ProjectsList from "./ProjectsList";

const Sidebar = ({ onAddProject, projects }) => {
  return (
    <aside>
      <h1>Your Projects</h1>
      <Button onClick={onAddProject}>+ Add Project</Button>

      {projects && <ProjectsList projects={projects} />}
    </aside>
  );
};

export default Sidebar;
