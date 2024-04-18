const ProjectsList = ({ projects, onActiveProject }) => {
  return (
    <ol className="projects_list">
      {projects.map((project) => (
        <li key={project.id} onClick={() => onActiveProject(project.id)}>
          {project.title}
        </li>
      ))}
    </ol>
  );
};

export default ProjectsList;
