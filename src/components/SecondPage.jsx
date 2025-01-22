import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const SecondPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white flex flex-col justify-center items-center relative"
      style={{ backgroundImage: "url('/SquidGame.png')" }}
    >
      
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 right-4 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 focus:outline-none"
      >
        Back to First Page
      </button>

    
      <div className="text-center mt-10 px-4">
      <p className="text-lg sm:text-xl font-bold w-[90%] sm:w-[70%] mx-auto">
        <Typewriter
            words={[
            "Life is like a game. There are many players. If you don't play with them, they'll play with you.",
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
    </div>
  );
};

export default SecondPage;
