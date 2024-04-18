import NoProjectCreated from "./NoProjectCreated";

const Home = ({ onAddProject }) => {
  return (
    <>
      <NoProjectCreated onAddProject={onAddProject} />
    </>
  );
};

export default Home;
