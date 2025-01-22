const Navbar = () => {
    return (
      <div className="flex flex-col sm:flex-row justify-between items-center px-6 py-4 shadow-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        <div className="text-2xl font-extrabold text-white mb-2 sm:mb-0">
        </div>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <a
            href="/"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-2xl focus:ring focus:ring-blue-300 transition-all duration-300"
          >
            Home
          </a>
          <a
            href="/"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-2xl focus:ring focus:ring-green-300 transition-all duration-300"
          >
            Grid
          </a>
          <a
            href="https://www.linkedin.com/in/priyam-pandey-a3516a287/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-gray-500 to-gray-700 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-2xl focus:ring focus:ring-gray-400 transition-all duration-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  