import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const SecondPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white flex flex-col justify-center items-center relative"
      style={{
        backgroundImage: "url('/SquidGame.png')",
        backgroundColor: "black",
      }}
    >
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-2 rounded-lg hover:bg-pink-700 focus:outline-none md:px-4 md:py-3 lg:px-5 lg:py-3"
      >
        Back to First Page
      </button>

      {/* Profile Section */}
      <div className="absolute top-8 left-4 sm:left-8 md:left-12 lg:left-16 bg-black/70 text-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg flex flex-col sm:flex-row items-center gap-4 sm:gap-6 shadow-lg border-2 border-pink-500">
        <img
          src="/Priyam.jpeg"
          alt="Your Name"
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full object-cover border-4 border-pink-500"
        />
        <div className="text-center sm:text-left">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-wider">
            Priyam Pandey
          </p>
          <p className="text-sm sm:text-base md:text-lg">Reg No: 20233221</p>
          <a
            href="https://www.instagram.com/priyam_pandey05/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block bg-pink-600 text-white px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-3 rounded-lg hover:bg-pink-700"
          >
            Instagram
          </a>
        </div>
      </div>

      {/* Quote Section */}
      <div className="text-center mt-20 px-4 w-full sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold leading-relaxed">
          <Typewriter
            words={[
              "Life is like a game.\nThere are many players.\nIf you don't play with them,\nthey'll play with you.",
            ]}
            loop={false}
            cursor={true}
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={60}
            delaySpeed={1000}
          />
        </p>
      </div>

      {/* Shapes Section */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-pink-600 flex justify-center items-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
          O
        </div>
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-pink-600 clip-triangle flex justify-center items-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black">
          ▲
        </div>
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-pink-600 flex justify-center items-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
          ■
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
