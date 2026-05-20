const ImdbTopMovies = () => {
  return (
    <div className="w-full min-h-screen bg-[#f5f5f5] px-10 py-8">
      

      <div className="flex items-start justify-between">
        <div className="w-full max-w-5xl"><p className="text-sm font-semibold tracking-[4px] uppercase text-black">
            IMDb Charts
          </p>
<h1 className="text-6xl font-light mt-4 text-[#1f1f1f]">
            IMDb Top 250 movies
          </h1>
<p className="text-3xl text-gray-500 mt-4">
            As rated by regular IMDb voters.
          </p>

          <div className="mt-12">
            <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden">
              <div className="w-0 h-full bg-black"></div>
            </div>

            <div className="flex items-center justify-between mt-5 text-xl font-semibold">
              <p>0 OF 250 WATCHED</p>
              <p>0%</p>
            </div>
          </div>

         
          <div className="flex items-center justify-between mt-14">
            <h2 className="text-5xl font-medium text-black">
              250 Titles
            </h2>

            <div className="flex items-center gap-6">
              

              <button className="text-4xl text-gray-500">
                ☰
              </button>

         
              <button className="text-4xl text-gray-500">
                ⊞
              </button>

  
              <button className="w-20 h-20 rounded-full border-2 border-blue-500 flex items-center justify-center text-blue-500 text-4xl">
                ☰
              </button>
            </div>
          </div>

          
          <div className="mt-10">
            <button className="w-20 h-20 rounded-full bg-blue-600 text-white text-4xl flex items-center justify-center shadow-lg">
              ☰
            </button>
          </div>
<div className="flex items-center justify-end gap-6 mt-20">
            <p className="text-4xl font-medium">Sort by</p>

            <button className="text-blue-600 text-4xl font-medium flex items-center gap-2">
              Ranking
              <span className="text-2xl">▼</span>
            </button>

            <button className="text-blue-600 text-5xl">
              ↑
            </button>
          </div>
        </div>

        <div className="hidden lg:block ml-10">
          <img
            src="https://i.pinimg.com/1200x/21/32/ca/2132ca80abb85d02b4c162808ebf061b.jpg"alt="banner"className="w-[420px] h-[520px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ImdbTopMovies;