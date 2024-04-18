const ProjectsList = ({ projects }) => {
  return (
    <ol className="projects_list">
      {projects.map((project) => (
        <li key={project.id}>{project.title}</li>
      ))}
    </ol>
  );
};

export default ProjectsList;
