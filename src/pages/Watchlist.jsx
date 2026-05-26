const watchlistMovies = [
  {
    title: "Inception",
    year: 2010,
    rating: "8.8",
    image:
      "https://i.pinimg.com/1200x/b0/ae/a4/b0aea49646879a043ad9f6ec3002e99f.jpg",
  },
  {
    title: "Interstellar",
    year: 2014,
    rating: "8.7",
    image:
      "https://i.pinimg.com/1200x/0b/34/ce/0b34ce2145b475247577a5d438a199b0.jpg",
  },
  {
    title: "The Dark Knight",
    year: 2008,
    rating: "9.0",
    image:
      "https://i.pinimg.com/1200x/31/8d/07/318d07a48fb6f063a5b01c4b0a0f5416.jpg",
  },
]

function Watchlist() {
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-10">
  <section className="mx-auto max-w-6xl">
        <div className="rounded-xl bg-white p-8 shadow">
          <h1 className="text-4xl font-bold text-gray-900">Your Watchlist</h1>
          <p className="mt-3 text-gray-600">            Movies and shows you want to watch later will appear here.
          </p>

          <button className="mt-6 rounded bg-yellow-400 px-5 py-3 font-bold text-black hover:bg-yellow-300">
            Add new movie
          </button>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {watchlistMovies.map((movie) => (
            <div key={movie.title} className="overflow-hidden rounded-xl bg-white shadow">
              <img src={movie.image} alt={movie.title}
                className="h-[360px] w-full object-cover"
              />

              <div className="p-5">
                <h2 className="text-2xl font-bold text-gray-900">{movie.title}</h2>
                <p className="mt-2 text-gray-600">{movie.year}</p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="font-bold text-yellow-500">⭐ {movie.rating}</span>
                  <button className="rounded border border-gray-300 px-4 py-2 text-sm font-semibold hover:bg-gray-100">
                    Remove
       </button>
            </div>
           </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Watchlist
