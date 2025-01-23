import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiTextAlignJustify } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="shadow-md bg-white">
      
      <div className="flex justify-between items-center px-6 py-2">
        
        {menuOpen ? (
          <RxCross1
            className="text-xl text-black cursor-pointer sm:hidden ms-auto"
            onClick={() => setMenuOpen(false)}
          />
        ) : (
          <CiTextAlignJustify
            className="text-xl text-black cursor-pointer sm:hidden ms-auto"
            onClick={() => setMenuOpen(true)}
          />
        )}

        
        <div className="hidden sm:flex sm:ml-auto space-x-4 justify-center items-center">
          <button
            onClick={() => navigate("/second")}
            className="px-4 py-2 text-black"
          >
            Home
          </button>
          <a href="/" className="px-4 py-2 text-black">
            Grid
          </a>
          <a
            href="https://www.linkedin.com/in/priyam-pandey-a3516a287/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg text-black"
          >
            LinkedIn
          </a>
        </div>
      </div>

      
      {menuOpen && (
        <div className="flex flex-col items-center px-6 py-2 space-y-4 sm:hidden">
          <button
            onClick={() => {
              setMenuOpen(false);
              navigate("/second");
            }}
            className="px-4 py-2 text-black text-center"
          >
            Home
          </button>
          <a
            href="/"
            className="px-4 py-2 text-black text-center"
            onClick={() => setMenuOpen(false)}
          >
            Grid
          </a>
          <a
            href="https://www.linkedin.com/in/priyam-pandey-a3516a287/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg text-black text-center"
            onClick={() => setMenuOpen(false)}
          >
            LinkedIn
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
