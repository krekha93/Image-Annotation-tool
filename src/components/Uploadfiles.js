import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { DropzoneArea } from "material-ui-dropzone";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";

const buttonStyle = {
  position: "absolute",
  top: "80px",
  right: "10px",
  marginRight: "20px",
  marginTop: "20px",
  color: "white",
  padding: "5px 10px",
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const Uploadfiles = ({ addFileData }) => {
  const [open, setOpen] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //   const handleChange = (newFiles) => {
  //     setUploadedFiles((prevFiles) => [...prevFiles, ...newFiles]);
  //   };

  const handleChange = (newFiles) => {
    // Iterate over each uploaded file and process it
    newFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        const base64ImageData = e.target.result; // Get the base64-encoded image data
        setUploadedFiles((prevFiles) => [
          ...prevFiles,
          { file, base64ImageData },
        ]);
      };

      // Read the file and trigger the onload event
      reader.readAsDataURL(file);
    });
  };

  const handleUpload = () => {
    const status = ["Active", "In-progress", "Annotated"];
    const fileInfo = uploadedFiles.map((uploadedFile, index) => ({
      file_name: uploadedFile.file.name,
      status: status[index],
      file_size: `${(uploadedFile.file.size / 1024).toFixed(2)} KB`,
      file_type: uploadedFile.file.type,
      image_data: uploadedFile.base64ImageData,
    }));

    console.log(fileInfo);
    addFileData(fileInfo);
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        style={buttonStyle}
      >
        Upload Files
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Button
            onClick={handleClose}
            style={{
              position: "absolute",
              top: "5px",
              right: "2px",
              zIndex: 1,
              color: "black",
            }}
          >
            <CloseIcon />
          </Button>
          <div style={{ width: "450px" }}>
            <DropzoneArea
              showPreviewsInDropzone={false}
              previewGridProps={{ container: { spacing: 1, direction: "row" } }}
              filesLimit={10}
              onChange={handleChange}
              style={{ width: "100px" }}
            />
            <div>
              <h2 style={{ marginTop: 20 }}>Selected Files:</h2>
              <ul>
                {uploadedFiles.map((file, index) => (
                  <li key={index}>{file.file.name}</li>
                ))}
              </ul>
            </div>
            <Button
              variant="contained"
              color="primary"
              onClick={handleUpload}
              style={{ marginTop: 20 }}
            >
              Upload
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Uploadfiles;
