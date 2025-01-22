import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate();
    return (
      <div className="flex flex-col sm:flex-row justify-between items-center px-6 py-4 shadow-md bg-white">
        <div className="text-xl font-bold mb-2 sm:mb-0"></div>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => navigate("/second")}
            className="px-4 py-2  text-black font-semibold"
          >
            Home
          </button>
          <a
            href="/"
            className="px-4 py-2 text-black font-semibold"
          >
            Grid
          </a>
          <a
            href="https://www.linkedin.com/in/priyam-pandey-a3516a287/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg text-black font-semibold"
          >
            LinkedIn
          </a>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  