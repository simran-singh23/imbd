import { useMemo, useState } from "react"

const boxOfficeMovies = [
  { title: "Avatar", year: 2009,
     weekend: "$77M", total: "$2.9B" },

  { title: "Avengers: Endgame", year: 2019,
     weekend: "$357M", total: "$2.7B" },

  { title: "Titanic", year: 1997,
     weekend: "$28M", total: "$2.2B" },

  { title: "The Lion King", year: 2019, 
    weekend: "$191M", total: "$1.6B" },
]

function BoxOfficeMojo() {
  const [search, setSearch] = useState("")

  const filteredMovies = useMemo(() => {

    return boxOfficeMovies.filter((movie) =>

      movie.title.toLowerCase().includes(search.toLowerCase()),

    )
  }, [search])

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-12">
      <section className="mx-auto max-w-6xl">

        <h1 className="text-4xl font-bold text-gray-900">Box Office Mojo</h1>

        <p className="mt-3 text-lg text-gray-600">

          Search simple box office records and totals.
        </p>

        <input value={search}

          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search movie"
          className="mt-6 w-full max-w-xl rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
        />

        <div className="mt-8 overflow-hidden rounded-xl bg-white shadow">
          <table className="w-full text-left">
            <thead className="bg-black text-white">
              <tr>
        <th className="p-4">Movie</th>
     <th className="p-4">Year</th>
 <th className="p-4">Opening Weekend</th>
                <th className="p-4">Worldwide Total</th>
              </tr>
            </thead>
            <tbody>
              {filteredMovies.map((movie) => (
                <tr key={movie.title} className="border-b border-gray-200">
        <td className="p-4 font-bold">{movie.title}</td>
         <td className="p-4">{movie.year}</td>
         <td className="p-4">{movie.weekend}</td>
                  <td className="p-4">{movie.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}

export default BoxOfficeMojo
