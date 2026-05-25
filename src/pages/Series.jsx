const series = [
  {
    title: "Breaking Bad",
    year: "2008-2013",
    rating: "9.5",
    genre: "Crime Drama",
    image:
      "https://i.pinimg.com/1200x/37/62/75/37627587496965efcc0ae42ac9dff525.jpg",
  },
  {
    title: "Stranger Things",
    year: "2016-2025",rating: "8.7",

    genre: "Sci-Fi Horror",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjg2NmM0MTEtYWY2Yy00NmFlLTllNTMtMjVkZjEwMGVlNzdjXkEyXkFqcGc@._V1_.jpg",
  },
  {
    title: "Game of Thrones",
    year: "2011-2019",
    rating: "9.2",
    genre: "Fantasy",
    image:
      "https://i.pinimg.com/1200x/5a/9d/2e/5a9d2e897d587941d610a05e6af4ba0f.jpg",
  },
  {
    title: "The Last of Us",
    year: "2023-",
    rating: "8.7",
    genre: "Drama Adventure",
    image:
      "https://m.media-amazon.com/images/M/MV5BYWI3ODJlMzktY2U5NC00ZjdlLWE1MGItNWQxZDk3NWNjN2RhXkEyXkFqcGc@._V1_.jpg",
  },
]

function Series() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12 text-white">
   <section className="mx-auto max-w-7xl">
        <div className="mb-10">
   <p className="text-sm font-bold uppercase tracking-[0.35em] text-yellow-400">
            IMDb Series
          </p>
  <h1 className="mt-4 text-5xl font-black">Top Series</h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-300">
            Popular shows, fan favorites, and must-watch series in one place
     </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
       {series.map((show) => ( <article key={show.title}
              className="overflow-hidden rounded-2xl bg-zinc-900 shadow-xl ring-1
               ring-white/10 transition hover:-translate-y-1 hover:ring-yellow-400/70"
            >
              <img src={show.image}
     alt={show.title} className="h-[380px] w-full object-cover"
              />

              <div className="p-5">

    <div className="flex items-center justify-between gap-4">

          <h2 className="text-2xl font-bold">{show.title}</h2>

                  <span className="rounded bg-yellow-400 px-2 py-1 text-sm font-black text-black">
                    {show.rating}

                  </span>
                </div>

       <p className="mt-3 text-zinc-400">{show.year}</p>
                <p className="mt-2 font-semibold text-yellow-300">{show.genre}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Series
