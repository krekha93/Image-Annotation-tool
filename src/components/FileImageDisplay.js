import React from "react";

const FileImageDisplay = ({ selectedFile }) => {
  if (!selectedFile) {
    return null;
  }

  return (
    <div style={{ marginTop: "50px" }}>
      <img
        src={selectedFile.image_data}
        alt={selectedFile.file_name}
        style={{ width: "800px", height: "500px" }}
      />
    </div>
  );
};

export default FileImageDisplay;
