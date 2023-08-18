import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import { MenuItem, Select, FormControl, InputLabel } from "@mui/material/";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex", // Apply flex display to the Box component
  flexDirection: "column", // Align children vertically
  alignItems: "center",
};

const buttonStyle = {
  position: "absolute",
  top: "80px", // Align with the top edge
  right: "10px", // Align with the right edge
  marginRight: "20px",
  marginTop: "20px",
  color: "white",
  padding: "5px 10px",
};

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "center",
  marginTop: "20px", // Add some margin to separate from other elements
};

export default function BasicModal({ addProject }) {
  const [open, setOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");

  const handleLabelChange = (event) => {
    setSelectedLabel(event.target.value);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleInput = (event) => {
    if (event.target.name === "Project Name") {
      setProjectName(event.target.value);
    } else {
      setDescription(event.target.value);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    const project = {
      projectName,
      description,
      selectedLabel,
    };

    addProject(project);

    setProjectName("");
    setDescription("");
    setSelectedLabel([]);
    setOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        style={buttonStyle}
        variant="contained"
        color="primary"
      >
        Create Project
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Button
            onClick={handleClose}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              zIndex: 1,
              color: "black",
            }}
          >
            <CloseIcon />
          </Button>
          <form onSubmit={handleSubmit}>
            <Grid item xs={12}>
              <Typography variant="h6">Enter Project Details </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                margin="dense"
                variant="outlined"
                label="Project Name"
                name="Project Name"
                value={projectName}
                onChange={handleInput}
              />
              <TextField
                fullWidth
                margin="dense"
                variant="outlined"
                label="Description"
                name="Description"
                value={description}
                onChange={handleInput}
              />
              {/* <TextField
                style={{ marginTop: 20 }}
                label="Label Type "
                fullWidth
                select
                variant="outlined"
                value={selectedLabel}
                margin="dense"
                onChange={handleLabelChange}
                helperText="Please select Label Type"
                SelectProps={{
                  multiple: true,
                  renderValue: (selected) => selected.join(", "),
                }}
              > */}
              <FormControl fullWidth variant="outlined" margin="dense">
                <InputLabel htmlFor="label-type-select">Label Type</InputLabel>
                <Select
                  multiple
                  value={selectedLabel}
                  onChange={handleLabelChange}
                  label="Label Type"
                  inputProps={{
                    name: "Label Type",
                    id: "label-type-select",
                  }}
                  style={{ height: "45px" }}
                >
                  <MenuItem value="Facebook">Facebook</MenuItem>
                  <MenuItem value="Whatsapp">Whatsapp</MenuItem>
                  <MenuItem value="Linkedlist">Linkedlist</MenuItem>
                  <MenuItem value="Instagram">Instagram</MenuItem>
                  <MenuItem value="Twitter">Twitter</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <div style={buttonContainerStyle}>
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
