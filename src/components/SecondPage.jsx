const SecondPage = () => {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <div className="flex flex-col items-center justify-center px-4 mt-10 sm:mt-20">
          
          <img
            src="/path-to-your-picture.jpg"
            alt="Your Name"
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-pink-500"
          />
          <h1 className="text-2xl sm:text-3xl mt-4 text-center">Priyam Pandey</h1>
          <p className="mt-2 text-center">Registration Number: 20233221</p>
  
          
          <a
            href="https://www.instagram.com/priyam_pandey05/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 bg-pink-500 px-4 py-2 text-sm sm:text-base rounded-lg hover:bg-pink-600"
          >
            Visit My Instagram
          </a>
        </div>
      </div>
    );
  };
  
  export default SecondPage;