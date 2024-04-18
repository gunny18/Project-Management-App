import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Textarea from "./Textarea";
import { v4 as uuidv4 } from "uuid";

const INITIAL_PROJECT_INFO = {
  title: "",
  description: "",
  date: "",
};

const AddProject = ({ onResetProject, onAddProject }) => {
  const [projectInfo, setProjectInfo] = useState(INITIAL_PROJECT_INFO);

  const canSave = [
    projectInfo.title,
    projectInfo.description,
    projectInfo.date,
  ].every(Boolean);

  const handleOnChangeInput = (param, val) => {
    setProjectInfo((prevProjectInfo) => {
      return {
        ...prevProjectInfo,
        [param]: val,
      };
    });
  };

  function handleAddProject() {
    onAddProject({ id: uuidv4(), ...projectInfo });
    setProjectInfo(INITIAL_PROJECT_INFO);
    onResetProject();
  }

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <Input
          type="text"
          label="Title"
          id="title"
          required
          value={projectInfo.title}
          onChange={(e) => handleOnChangeInput("title", e.target.value)}
        />
        <Textarea
          id="description"
          label="Description"
          cols={30}
          rows={5}
          required
          value={projectInfo.description}
          onChange={(e) => handleOnChangeInput("description", e.target.value)}
        />
        <Input
          type="date"
          id="due_date"
          label="Due Date"
          required
          value={projectInfo.date}
          onChange={(e) => handleOnChangeInput("date", e.target.value)}
        />
      </form>
      <section className="add_prj_btn_container">
        <Button
          className="btn dark"
          onClick={handleAddProject}
          disabled={!canSave}
        >
          Save
        </Button>
        <Button className="btn light" onClick={onResetProject}>
          Cancel
        </Button>
      </section>
    </>
  );
};

export default AddProject;
