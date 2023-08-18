import React, { useState } from "react";
import { useRef } from "react";

const Dataset = () => {
  const [inputvalue, setInputvalue] = useState("");
  const [completed, setCompleted] = useState(false);

  const handlechange = (e) => {
    setInputvalue(e.target.value);
  };

  const handleblur = () => {
    if (inputvalue.trim() !== "") {
      setCompleted(true);
    } else {
      setCompleted(false);
    }
  };

  const inputref = useRef();
  return (
    <>
      s
      <div>
        <input
          type="text"
          ref={inputref}
          onChange={handlechange}
          onBlur={handleblur}
          style={{ backgroundColor: completed ? "yellow" : "transparent" }}
        />
      </div>
    </>
  );
};

export default Dataset;
