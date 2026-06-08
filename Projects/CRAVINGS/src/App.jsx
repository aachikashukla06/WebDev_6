const App =() => {
  return (
    <>
    {/* <div className="bg-red-800 text-white text-center text-3xl p-5">Cravings</div>
  
    <button className="bg">Submit</button> */}
     <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4')",
      }}
    >
      
      <div className="absolute inset-0 bg-black/45"></div>

     
      <div className="relative z-10">
        {/* Navbar */}
        <nav className="bg-orange-600 flex items-center justify-between px-16 py-4">
          <div className=" bg-orange-600 text-white text-4xl font-bold">
            crav<span className="text-orange-400">i</span>ng
          </div>

          <div className="flex items-center gap-6">
            <button className="text-white text-lg font-medium hover:text-orange-300 transition">
              Login
            </button>

            <button className="bg-white text-orange-600 px-6 py-2 rounded font-medium hover:bg-gray-100 transition">
              Register
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center mt-24 px-4">
          <h1 className="text-white text-6xl font-bold leading-tight max-w-4xl">
            Your Favorite Food,
            <br />
            Delivered Fast
          </h1>

          <p className="text-white text-2xl mt-6 max-w-3xl">
            Order from thousands of restaurants and get it delivered to your
            doorstep
          </p>

          {/* Buttons */}
          <div className="flex gap-6 mt-10">
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-12 py-4 rounded-xl text-2xl transition">
              Sign Up
            </button>

            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold px-12 py-4 rounded-xl text-2xl transition">
              Order Now
            </button>
          </div>

          {/* Search Bar */}
          <div className="mt-14 w-full max-w-6xl">
            <div className="bg-white rounded-xl flex items-center px-6 py-5 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>

              <input
                type="text"
                placeholder="Search restaurants or dishes..."
                className="w-full ml-4 outline-none text-lg text-gray-700"
              />
            </div>
          </div>

          {/* Slider Dots */}
          <div className="flex gap-3 mt-12">
            <div className="w-3 h-3 rounded-full bg-gray-400"></div>
            <div className="w-10 h-3 rounded-full bg-white"></div>
            <div className="w-3 h-3 rounded-full bg-gray-400"></div>
            <div className="w-3 h-3 rounded-full bg-gray-400"></div>
          </div>
        </div>

        {/* Left Arrow */}
        <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white w-14 h-14 rounded-full text-3xl hover:bg-white/30">
          ❮
        </button>

        {/* Right Arrow */}
        <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white w-14 h-14 rounded-full text-3xl hover:bg-white/30">
          ❯
        </button>
      </div>
    </div>
    </>
  );
};

export default App;