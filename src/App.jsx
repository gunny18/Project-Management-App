import { useState } from "react";
import AddProject from "./components/AddProject";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [newProject, setNewProject] = useState(null);
  const [projects, setProjects] = useState([]);

  function handleAdddNewProject() {
    setNewProject(true);
  }

  function resetAddNewProject() {
    setNewProject(false);
  }

  function handleNewProject(projectInfo) {
    setProjects((prevProjects) => {
      return [projectInfo, ...prevProjects];
    });
  }

  return (
    <main className="App">
      <Sidebar onAddProject={handleAdddNewProject} projects={projects} />
      {newProject ? (
        <AddProject
          onResetProject={resetAddNewProject}
          onAddProject={handleNewProject}
        />
      ) : (
        <Home onAddProject={handleAdddNewProject} />
      )}
    </main>
  );
};

export default App;
