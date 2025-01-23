import Navbar from "./Navbar";
import { useState } from "react";

const FirstPage = () => {
  const [gridColors, setGridColors] = useState([
    "bg-blue-900", "bg-blue-900", "bg-blue-900", "bg-blue-900", 
    "bg-blue-900", "bg-blue-900", "bg-blue-900", "bg-blue-900", 
    "bg-red-900" 
  ]);
  const [clickOrder, setClickOrder] = useState([]);

  const handleSquareClick = (index) => {
    if (gridColors[index] === "customBlue") return;

    const newColors = [...gridColors];
    newColors[index] = "bg-red-900"; 
    setClickOrder([...clickOrder, index]);

    if (index === 8) {
      let delay = 0;

      clickOrder.forEach((clickedIndex) => {
        setTimeout(() => {
          setGridColors((prevColors) => {
            const updatedColors = [...prevColors];
            updatedColors[clickedIndex] = "bg-blue-900"; 
            return updatedColors;
          });
        }, delay);
        delay += 300;
      });

      setTimeout(() => {
        setGridColors((prevColors) => {
          const updatedColors = [...prevColors];
          updatedColors[8] = "bg-red-900"; 
          return updatedColors;
        });
        setClickOrder([]);
      }, delay + 300);
    } else {
      setGridColors(newColors);
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen">
      <Navbar />
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 p-4">
        <div className="flex md:flex-row gap-5 md:order-2 flex-col">
          <div className="order-3 w-40 h-40 lg:w-60 lg:h-60 bg-gray-300 rounded-lg shadow-inner grid grid-cols-3 grid-rows-3 gap-2 p-5 ">
            {gridColors.map((color, index) => (
              <div
              key={index}
              className={`w-full h-full ${color} rounded-lg`} 
              onClick={() => handleSquareClick(index)}
              ></div>
            ))}
          </div>

          <div className="order-2 w-40 h-40  sm:w-40 sm:h-40 lg:w-60 lg:h-60 bg-white rounded-lg shadow-lg flex justify-center items-center overflow-hidden border-[1px] border-black">
            <img
              src="/Ecell.png"
              alt="E-Cell Logo"
              className="w-full h-full object-cover"
              />
          </div>
        </div>
        
        <div className=" md:order-1 sm:order-1 md:w-[350px] w-40 h-40 sm:w-40 sm:h-40 lg:w-60 lg:h-60 bg-gradient-to-br from-blue-700 to-magenta rounded-lg shadow-lg"></div>
      </div>
    </div>
  );
};

export default FirstPage;
