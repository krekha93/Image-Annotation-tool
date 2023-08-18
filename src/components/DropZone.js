import React, { useCallback, useState } from "react";
import { Button, Container, Typography, Paper } from "@mui/material";
import { styled } from "@mui/system";
import { useDropzone } from "react-dropzone";

const DropzoneContainer = styled(Paper)`
  padding: 20px;
  margin-top: 20px;
`;

const Dropzone = () => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    // Handle dropped files here, e.g., upload to a server or display them
    setFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ["image/*", "application/pdf", "text/*"],
    maxFiles: 5,
    maxSize: 5000000, // 5 MB
  });

  return (
    <Container>
      <DropzoneContainer elevation={3}>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <p>Drag & drop some files here, or click to select files</p>
        </div>
      </DropzoneContainer>
      <Typography variant="h6" gutterBottom>
        Uploaded Files:
      </Typography>
      <ul>
        {files.map((file) => (
          <li key={file.name}>{file.name}</li>
        ))}
      </ul>
      {files.length > 0 && (
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            // Handle the upload of the selected files, e.g., send them to a server
            console.log("Uploading files:", files);
          }}
        >
          Upload
        </Button>
      )}
    </Container>
  );
};

export default Dropzone;
