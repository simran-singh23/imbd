export default function Advertising() {
  const movies = [
    {
      title: "Dark Knight",
      year: "2008",
      rating: "9.0",
      image:
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Avengers Endgame",
      year: "2019",
      rating: "8.4",
      image:
        "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Joker",
      year: "2019",
      rating: "8.5",
      image:
        "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Interstellar",
      year: "2014",
      rating: "8.7",
      image:
        "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">


      
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1600&auto=format&fit=crop"
          alt="banner"
          className="absolute w-full h-full object-cover opacity-40"
        />

        <div className="relative z-10 text-center px-5 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Unlimited Movies,
            <span className="text-yellow-400"> Reviews </span>
            & Trailers
          </h1>

          <p className="text-zinc-300 mt-6 text-lg leading-8">
            Discover trending movies, watch trailers, and explore ratings
            like IMDb.
          </p>

          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            <button className="bg-yellow-400 text-black font-bold px-7 py-3 rounded-2xl hover:scale-105 transition duration-300">
              Explore Now
            </button>

            <button className="border border-zinc-500 px-7 py-3 rounded-2xl hover:bg-white hover:text-black transition duration-300">
              Watch Trailer
            </button>
          </div>
        </div>
      </section>


      <section className="px-8 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold">
            Trending Movies
          </h2>

          <button className="text-yellow-400 hover:underline">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {movies.map((movie, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300 group"
            >
              <div className="overflow-hidden h-80">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold">
                    {movie.title}
                  </h3>

                  <span className="bg-yellow-400 text-black text-sm font-bold px-3 py-1 rounded-full">
                    ⭐ {movie.rating}
                  </span>
                </div>

                <p className="text-zinc-400 text-sm mb-5">
                  Release Year: {movie.year}
                </p>

                <button className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-xl hover:bg-yellow-300 transition duration-300">
                  Watch Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>


      <footer className="border-t border-zinc-800 py-8 text-center text-zinc-400">
        <h2 className="text-2xl font-bold text-yellow-400 mb-2">
          IMDb 
        </h2>

        <p>
          Designed with 
        </p>
      </footer>
    </div>
  );
}

