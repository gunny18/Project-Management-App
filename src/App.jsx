import { useState } from "react";
import AddProject from "./components/AddProject";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [newProject, setNewProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState(null);

  const handleActiveProject = (id) => {
    const activeProject = projects.find((project) => project.id === id);
    activeProject && setActiveProject(activeProject);
  };

  const handleDeleteProject = (id) => {
    const updatedProjects = projects.filter((project) => project.id !== id);
    setProjects(updatedProjects);
    resetActiveProject();
  };

  const resetActiveProject = () => {
    setActiveProject(null);
  };

  function handleAdddNewProject() {
    setNewProject(true);
  }

  function resetAddNewProject() {
    setNewProject(false);
    resetActiveProject();
  }

  function handleNewProject(projectInfo) {
    setProjects((prevProjects) => {
      return [projectInfo, ...prevProjects];
    });
    resetActiveProject();
  }

  return (
    <main className="App">
      <Sidebar
        onAddProject={handleAdddNewProject}
        projects={projects}
        onActiveProject={handleActiveProject}
      />
      {newProject ? (
        <AddProject
          onResetProject={resetAddNewProject}
          onAddProject={handleNewProject}
        />
      ) : (
        <Home
          onAddProject={handleAdddNewProject}
          activeProject={activeProject}
          onDeleteProject={handleDeleteProject}
        />
      )}
    </main>
  );
};

export default App;
