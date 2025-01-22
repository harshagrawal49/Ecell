import Navbar from "./Navbar";
import { useState } from "react";

const FirstPage = () => {
  const [gridColors, setGridColors] = useState(Array(9).fill("bg-blue-800"));
  const [clickOrder, setClickOrder] = useState([]); 

  const handleSquareClick = (index) => {
    if (gridColors[index] === "bg-red-600") return; 

    const newColors = [...gridColors];
    newColors[index] = "bg-red-600";
    setClickOrder([...clickOrder, index]); 

    if (index === 8) {
      
      let delay = 0;

      clickOrder.forEach((clickedIndex, idx) => {
        setTimeout(() => {
          setGridColors((prevColors) => {
            const updatedColors = [...prevColors];
            updatedColors[clickedIndex] = "bg-blue-800";
            return updatedColors;
          });
        }, delay);
        delay += 300; 
      });

      setTimeout(() => {
        setGridColors(Array(9).fill("bg-blue-900"));
        setClickOrder([]); 
      }, delay + 300);
    } else {
      setGridColors(newColors);
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen">
      <Navbar />
      <div className="flex-row justify-center items-center">
        <div className="w-40 h-40 bg-gradient-to-br from-purple-700 to-pink-500 rounded-lg shadow-lg"></div>
        <div className="w-40 h-40 bg-white rounded-lg shadow-lg flex justify-center items-center overflow-hidden">
          <img src="/Ecell.png" alt="E-Cell Logo" className="w-full h-full object-cover" />
        </div>
        <div className="w-40 h-40 bg-gray-100 rounded-lg shadow-inner grid grid-cols-3 grid-rows-3 gap-1 p-1">
          {gridColors.map((color, index) => (
            <div
              key={index}
              className={`w-full h-full ${color} rounded-sm`}
              onClick={() => handleSquareClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
