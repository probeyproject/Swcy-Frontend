import React, { useEffect, useRef, useState } from "react";

const CustomePrinting = () => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);

  useEffect(() => {
    import("fabric").then((fabricModule) => {
      const fabric = fabricModule.default;
      const newCanvas = new fabric.Canvas("tshirtCanvas", {
        width: 300,
        height: 400,
        backgroundColor: "#fff",
      });
      setCanvas(newCanvas);
    });
  }, []);

  const addText = () => {
    const text = new fabric.Text("Your Text", {
      left: 100,
      top: 200,
      fontSize: 24,
      fill: "black",
    });
    canvas.add(text);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (f) => {
      fabric.Image.fromURL(f.target.result, (img) => {
        img.scaleToWidth(150);
        img.scaleToHeight(150);
        img.set({ left: 75, top: 100 });
        canvas.add(img);
      });
    };
    reader.readAsDataURL(file);
  };

  const downloadDesign = () => {
    const dataURL = canvas.toDataURL({ format: "png" });
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "custom_tshirt.png";
    link.click();
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-xl font-bold mb-4">T-Shirt Customizer</h2>
      <canvas id="tshirtCanvas" ref={canvasRef} className="border border-gray-300" />
      <div className="mt-4 flex gap-2">
        <input type="file" onChange={handleImageUpload} accept="image/*" className="hidden" id="upload" />
        <label htmlFor="upload" className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">Upload Design</label>
        <button onClick={addText}>Add Text</button>
        <button onClick={downloadDesign}>Download</button>
      </div>
    </div>
  );
};

export default CustomePrinting;
