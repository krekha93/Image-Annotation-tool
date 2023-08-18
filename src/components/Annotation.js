import React, { useState, useEffect } from "react";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import { useParams } from "react-router";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import "../index.css";
import FileImageDisplay from "./FileImageDisplay";
import { fabric } from "fabric";

const buttonStyle = {
  color: "white",
  padding: "5px 10px",
  marginLeft: "15px",
};

const Annotation = ({ fileData }) => {
  const { editor, onReady } = useFabricJSEditor();
  const [input, setInput] = useState("");
  const [selectedlabel, setSelectedLabel] = useState("");
  const [labels, setLabels] = useState([]);
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [boundingBoxes, setBoundingBoxes] = useState([]);
  const [selectedLabelObj, setSelectedLabelObj] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const { fileName } = useParams();

  const selectedFile = fileData.find((file) => file.file_name === fileName);
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    setLabels((prevLabels) => [
      ...prevLabels,
      {
        text: input,
        color: selectedColor,
      },
    ]);
    setInput("");
  };

  const handleLabelChange = (e) => {
    setSelectedLabel(e.target.value);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const textFieldStyle = {
    color: selectedColor,
  };
  const onAddRectangle = () => {
    if (selectedlabel && editor) {
      const selectedLabelObj = labels.find(
        (label) => label.text === selectedlabel
      );

      if (selectedLabelObj) {
        editor.addRectangle({
          selectable: true,
          hasControls: true,
          hasBorders: true,
        });

        setSelectedLabelObj(selectedLabelObj);
      }
    }
  };

  //   const onMouseDown = () => {
  //     setIsDrawing(true);
  //   };

  //   const onMouseUp = () => {
  //     if (editor && isDrawing) {
  //       // Drawing is finished
  //       const canvasObjects = editor.canvas.getObjects();
  //       const rectangle = canvasObjects[canvasObjects.length - 1];

  //       if (rectangle) {
  //         // Add the rectangle to the canvas
  //         editor.canvas.add(rectangle);

  //         const updatedBoundingBoxes = [
  //           ...boundingBoxes,
  //           {
  //             color: selectedLabelObj.color,
  //             label: selectedLabelObj.text,
  //             object: rectangle,
  //           },
  //         ];

  //         setBoundingBoxes(updatedBoundingBoxes);
  //       }

  //       // Clear the canvas
  //       editor.canvas.clear();
  //       setIsDrawing(false);
  //     }
  //   };
  //   console.log(boundingBoxes);
  //   useEffect(() => {
  //     if (editor) {
  //       // Event listeners for Fabric.js canvas
  //       editor.canvas.on("mouse:down", onMouseDown);
  //       editor.canvas.on("mouse:up", onMouseUp);

  //       return () => {
  //         // Clean up event listeners when component unmounts
  //         editor.canvas.off("mouse:down", onMouseDown);
  //         editor.canvas.off("mouse:up", onMouseUp);
  //       };
  //     }
  //   }, [editor]);

  //   const saveAnnoation = () => {
  //     const canvasObjects = editor.canvas.getObjects();

  //     const rectangle = canvasObjects[canvasObjects.length - 1];

  //     if (rectangle) {
  //       const updatedBoundingBoxes = [
  //         ...boundingBoxes,
  //         {
  //           color: selectedLabelObj.color,
  //           label: selectedLabelObj.text,
  //           object: rectangle,
  //         },
  //       ];

  //       setBoundingBoxes(updatedBoundingBoxes);
  //       editor.canvas.remove(rectangle);
  //     }

  //     console.log(boundingBoxes);
  //   };

  //   useEffect(() => {
  //     if (editor) {
  //       let isDrawing = false;
  //       let startPoint = null;

  //       const onMouseDown = (event) => {
  //         isDrawing = true;
  //         startPoint = editor?.canvas?.getPointer(event.e);
  //       };

  //       const onMouseMove = (event) => {
  //         if (!isDrawing) return;
  //         const currentPoint = editor?.canvas?.getPointer(event.e);
  //         // Check if editor, canvas, and startPoint are defined before using them
  //         if (editor && editor.canvas && startPoint && currentPoint) {
  //           const left = Math.min(startPoint.x, currentPoint.x);
  //           const top = Math.min(startPoint.y, currentPoint.y);
  //           const width = Math.abs(startPoint.x - currentPoint.x);
  //           const height = Math.abs(startPoint.y - currentPoint.y);

  //           const rect = new fabric.Rect({
  //             left,
  //             top,
  //             width,
  //             height,
  //             fill: selectedLabelObj.color,
  //             stroke: selectedLabelObj.color,
  //             strokeWidth: 2,
  //             selectable: true,
  //             hasControls: true,
  //             hasBorders: true,
  //           });

  //           editor.canvas.clear();
  //           editor.canvas.add(rect);
  //           editor.canvas.renderAll();
  //         }
  //       };

  //       const onMouseUp = () => {
  //         isDrawing = false;
  //         startPoint = null;
  //       };

  //       editor.canvas.on("mouse:down", onMouseDown);
  //       editor.canvas.on("mouse:move", onMouseMove);
  //       editor.canvas.on("mouse:up", onMouseUp);

  //       return () => {
  //         editor.canvas.off("mouse:down", onMouseDown);
  //         editor.canvas.off("mouse:move", onMouseMove);
  //         editor.canvas.off("mouse:up", onMouseUp);
  //       };
  //     }
  //   }, [editor, selectedLabelObj]);

  useEffect(() => {
    if (editor) {
      // Event listeners for Fabric.js canvas
      editor.canvas.on("mouse:down", () => {
        if (isDrawing) {
          const pointer = editor.canvas.getPointer(editor.canvas.getPointer());
          const rect = new fabric.Rect({
            left: pointer.x,
            top: pointer.y,
            width: 0,
            height: 0,
            fill: selectedLabelObj.color,
            stroke: selectedLabelObj.color,
            strokeWidth: 2,
            selectable: true,
            hasControls: true,
            hasBorders: true,
          });

          editor.canvas.add(rect);
          editor.canvas.renderAll();
          console.log(rect);
          const mouseMoveListener = (event) => {
            if (!isDrawing) return;

            const pointer = editor.canvas.getPointer(event.e);

            rect.set({
              width: Math.abs(pointer.x - rect.left),
              height: Math.abs(pointer.y - rect.top),
            });

            rect.setCoords();
            editor.canvas.renderAll();
          };

          const mouseUpListener = () => {
            console.log(rect);
            if (isDrawing) {
              setIsDrawing(false);
              // Add the drawn rectangle to the boundingBoxes array
              setBoundingBoxes((prevBoxes) => [
                ...prevBoxes,
                {
                  color: selectedLabelObj.color,
                  label: selectedLabelObj.text,
                  object: rect,
                },
              ]);
              editor.canvas.off("mouse:move", mouseMoveListener);
              editor.canvas.off("mouse:up", mouseUpListener);
            }
          };
          console.log(boundingBoxes);

          editor.canvas.on("mouse:move", mouseMoveListener);
          editor.canvas.on("mouse:up", mouseUpListener);
        }
      });

      return () => {
        // Clean up event listeners when component unmounts
        editor.canvas.off("mouse:down");
        editor.canvas.off("mouse:move");
        editor.canvas.off("mouse:up");
      };
    }
  }, [editor, selectedLabelObj, isDrawing]);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "10px",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            flex: "50%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
            }}
          >
            <TextField
              label="Enter Label Type"
              id="outlined-size-small"
              size="small"
              value={input}
              onChange={handleChange}
              autoComplete="off"
              InputProps={{
                style: textFieldStyle,
              }}
            />

            <input
              type="color"
              value={selectedColor}
              onChange={handleColorChange}
              style={{ width: "50px", height: "40px", marginLeft: "15px" }}
            />

            <Button
              onClick={handleClick}
              style={buttonStyle}
              variant="contained"
              color="primary"
            >
              Add Label
            </Button>
          </div>

          <div
            style={{
              display: "flex",
            }}
          >
            <FormControl
              sx={{
                minWidth: 120,
                borderRadius: "4px",
              }}
              size="small"
            >
              <InputLabel id="demo-select-small-label">Labels</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={selectedlabel}
                label="Label Type"
                onChange={handleLabelChange}
                inputProps={{
                  name: "Label Type",
                  id: "label-type-select",
                }}
                className="custom-select"
              >
                {labels.map((label, index) => (
                  <MenuItem
                    key={index}
                    style={{ color: label.color }}
                    value={label.text}
                  >
                    {label.text}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              onClick={onAddRectangle}
              variant="contained"
              color="primary"
              style={{ marginLeft: "10px" }}
            >
              Start Annotation
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: "10px" }}
            >
              Save Annotation
            </Button>
          </div>
        </div>

        <div style={{ flex: "50%", position: "relative" }}>
          <FileImageDisplay selectedFile={selectedFile} />

          {/* {!selectedFile ? null : (
            <div>
              <img
                src={selectedFile.image_data}
                alt={selectedFile.file_name}
                style={{ maxWidth: "100%", maxHeight: "300px" }}
              />
            </div>
          )} */}
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              zIndex: 1,
              width: "800px",
              height: "500px",
            }}
          >
            {boundingBoxes.map((box, index) => (
              <l1>
                {box.color}, {box.label}
              </l1>
              //   <rect
              //     key={index}
              //     x={box.left}
              //     y={box.top}
              //     width={box.width}
              //     height={box.height}
              //     fill={box.color}
              //     stroke={box.color}
              //     strokeWidth={2}
              //     selectable={true}
              //     hasControls={true}
              //     hasBorders={true}
              //     object={box.object}
              //   />
            ))}
            <FabricJSCanvas
              className="canvas-container"
              onReady={onReady}
              selection={true}
              evented={true}
            />

            {/* <Canvas1 /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Annotation;
