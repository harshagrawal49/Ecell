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
      
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 right-4 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 focus:outline-none"
      >
        Back to First Page
      </button>

      
      <div className="absolute top-8 left-8 bg-black/70 text-white p-6 rounded-lg flex items-center gap-6 shadow-lg border-2 border-pink-500">
        
        <img
          src="/Priyam.jpeg"
          alt="Your Name"
          className="w-24 h-24 rounded-full object-cover border-4 border-pink-500 mt-1"
        />
        
        <div>
          <p className="text-2xl font-bold tracking-wider">Priyam Pandey</p>
          <p className="text-lg">Reg No: 20233221</p>
          <a
            href="https://www.instagram.com/priyam_pandey05/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700"
          >
            Instagram
          </a>
        </div>
      </div>

      
      <div className="text-center mt-20 px-4">
        <p className="text-lg sm:text-xl font-bold w-full sm:w-[70%] mx-auto leading-relaxed">
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

      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-6">
        
        <div className="w-16 h-16 rounded-full bg-pink-600 flex justify-center items-center text-2xl font-bold">
          O
        </div>
        
        <div className="w-16 h-16 bg-pink-600 clip-triangle flex justify-center items-center text-2xl font-bold text-black">
          ▲
        </div>
        
        <div className="w-16 h-16 bg-pink-600 flex justify-center items-center text-2xl font-bold">
          ■
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
