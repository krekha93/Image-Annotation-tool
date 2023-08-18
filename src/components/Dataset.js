import React from "react";
import Table1 from "./Table1";
import Uploadfiles from "./Uploadfiles";
import New from "./New";

const Dataset = ({ fileData, addFileData }) => {
  return (
    <>
      <div style={{ display: "flex", marginTop: "10px" }}>
        {/* <New /> */}
        <div style={{ flex: "70%" }}>
          <Table1 fileData={fileData} />
        </div>
        <div style={{ flex: "30%" }}>
          <Uploadfiles addFileData={addFileData} />
        </div>
      </div>
    </>
  );
};

export default Dataset;
