import { useNavigate } from "react-router-dom";
import { CiTextAlignJustify } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
    const navigate = useNavigate();

    return (
      <div className="flex flex-col sm:flex-row justify-between items-center px-6 py-2 shadow-md bg-white">
         
          <CiTextAlignJustify className="text-xl text-black cursor-pointer sm:hidden block ml-auto" />
      
        <div className="flex flex-col sm:flex-row sm:ml-auto space-y-2 sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => navigate("/second")}
            className="px-4 py-2 text-black"
          >
            Home
          </button>
          <a
            href="/"
            className="px-4 py-2 text-black"
          >
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
    );
};

export default Navbar;
