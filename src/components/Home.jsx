import NoProjectCreated from "./NoProjectCreated";
import ActiveProject from "./ActiveProject";

const Home = ({ onAddProject, activeProject, onDeleteProject }) => {
  return (
    <>
      {activeProject === null ? (
        <NoProjectCreated onAddProject={onAddProject} />
      ) : (
        <ActiveProject
          activeProject={activeProject}
          onDeleteProject={onDeleteProject}
        />
      )}
    </>
  );
};

export default Home;
