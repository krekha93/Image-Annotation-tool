import React, { useState } from "react";
import Table from "./Table";

import Modal1 from "./Modal1";

const Home = () => {
  const [projectData, setProjectData] = useState([]);

  const addProject = (project) => {
    setProjectData([...projectData, project]);
  };
  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ flex: "80%" }}>
          <Table projectData={projectData} />
        </div>
        <div style={{ flex: "20%" }}>
          <Modal1 addProject={addProject} />
        </div>
      </div>
    </>
  );
};

export default Home;
