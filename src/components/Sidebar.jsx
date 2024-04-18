import Button from "./Button";
import ProjectsList from "./ProjectsList";

const Sidebar = ({ onAddProject, projects, onActiveProject }) => {
  return (
    <aside>
      <h1>Your Projects</h1>
      <Button onClick={onAddProject}>+ Add Project</Button>

      {projects && (
        <ProjectsList projects={projects} onActiveProject={onActiveProject} />
      )}
    </aside>
  );
};

export default Sidebar;
