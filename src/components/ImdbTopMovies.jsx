const ImdbTopMovies = () => {
  return (
    <div className="w-full min-h-screen bg-[#f5f5f5] px-4 md:px-8 lg:px-12 py-8">
      
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
        
        <div className="w-full max-w-4xl">
          
          <p className="text-xs md:text-sm font-semibold
           tracking-[4px] uppercase text-black">
            IMDb Charts
          </p>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light mt-4 text-[#1f1f1f] leading-tight">
            IMDb Top 250 movies
          </h1>

          <p className="text-lg md:text-2xl text-gray-500 mt-4">
            As rated by regular IMDb voters.
          </p>

     
          <div className="mt-10">
            <div className="w-full h-3 bg-gray-300 rounded-full overflow-hidden">
              <div className="w-0 h-full bg-black"></div>
            </div>

            <div className="flex items-center justify-between mt-4 
            text-base md:text-lg font-semibold">
              <p>0 OF 250 WATCHED</p>
              <p>0%</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between
           gap-6 mt-12">
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black">
              250 Titles
            </h2>

            <div className="flex items-center gap-4">
              
              <button className="text-2xl md:text-3xl text-gray-500">
                ☰
              </button>

              <button className="text-2xl md:text-3xl text-gray-500">
                ⊞
              </button>

              <button className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-blue-500 flex items-center justify-center text-blue-500 text-2xl md:text-3xl">
                ☰
              </button>
            </div>
          </div>

          <div className="mt-8">
            <button className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-blue-600 text-white text-2xl md:text-3xl flex items-center justify-center shadow-lg">
              ☰
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-end gap-4 mt-14">
            
            <p className="text-2xl md:text-3xl font-medium">
              Sort by
            </p>

            <button className="text-blue-600 text-2xl md:text-3xl font-medium flex items-center gap-2">
              Ranking
              <span className="text-lg">▼</span>
            </button>

            <button className="text-blue-600 text-3xl md:text-4xl">
              ↑
            </button>
          </div>
        </div>


        <div className="w-full lg:w-auto flex justify-center">
          <img
            src="https://i.pinimg.com/1200x/21/32/ca/2132ca80abb85d02b4c162808ebf061b.jpg"
            alt="banner"
            className="w-full max-w-[320px] md:max-w-[380px] lg:w-[420px] h-auto lg:h-[520px] object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ImdbTopMovies;