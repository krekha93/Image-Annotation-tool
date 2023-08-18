import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar1 from "./components/NavBar1";
import Dataset from "./components/Dataset";
import Annotation from "./components/Annotation";

function App() {
  const [fileData, setFileData] = useState([]);

  const addFileData = (files) => {
    console.log(files);
    setFileData(files);
  };

  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <div className="w-1/5">
          <NavBar1 />
        </div>
        <div className="flex-1 p-4" style={{ marginTop: "60px" }}>
          <Routes>
            <Route
              path="/dataset"
              element={
                <Dataset fileData={fileData} addFileData={addFileData} />
              }
            />
            <Route
              path="/dataset/:id"
              element={
                <Dataset fileData={fileData} addFileData={addFileData} />
              }
            />
            <Route
              path="/annotation"
              element={<Annotation fileData={fileData} />}
            />
            <Route
              path="/annotation/:fileName"
              element={<Annotation fileData={fileData} />}
            />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
