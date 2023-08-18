import React, { useState } from "react";
import { useFabricJSEditor, FabricJSCanvas } from "fabricjs-react";
import { fabric } from "fabric";

const New = () => {
  const [canvas, setCanvas] = useState(null);
  const [annotations, setAnnotations] = useState([]);

  const onReady = (canvas) => {
    setCanvas(canvas);
    canvas.on("object:modified", handleObjectModified);
  };

  const handleObjectModified = (e) => {
    const updatedAnnotations = [...annotations];
    const modifiedObject = e.target;

    // Get the scaled dimensions
    const width = modifiedObject.getScaledWidth();
    const height = modifiedObject.getScaledHeight();

    const annotation = {
      left: modifiedObject.left,
      top: modifiedObject.top,
      width,
      height,
    };
    updatedAnnotations.push(annotation);
    setAnnotations(updatedAnnotations);
  };

  const addRectangle = () => {
    if (!canvas) return;

    const rectangle = new fabric.Rect({
      left: 10,
      top: 10,
      fill: "transparent",
      stroke: "red",
      strokeWidth: 2,
      selectable: true,
      scaleX: 1,
      scaleY: 1,
    });

    canvas.add(rectangle);
    canvas.setActiveObject(rectangle);
  };

  return (
    <div>
      <h1>Image Annotation Tool</h1>
      <div>
        <button onClick={addRectangle}>Add Rectangle</button>
        <FabricJSCanvas onReady={onReady} />
      </div>
      <div>
        <h2>Annotations:</h2>
        <ul>
          {annotations.map((annotation, index) => (
            <li key={index}>
              Left: {annotation.left}, Top: {annotation.top}, Width:{" "}
              {annotation.width}, Height: {annotation.height}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default New;
