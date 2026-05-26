import { useMemo, useState } from "react"

const jobs = [
  { title: "Frontend Developer", team: "Engineering", location: "Remote" },
  { title: "Content Editor", team: "Editorial", location: "Los Angeles" },
  { title: "Product Designer", team: "Design", location: "New York" },
  { title: "Marketing Manager", team: "Marketing", location: "Remote" },
]

function Jobs() {
  const [team, setTeam] = useState("All")
  const [applied, setApplied] = useState("")

  const filteredJobs = useMemo(() => {
    if (team === "All") {
      return jobs
    }

    return jobs.filter((job) => job.team === team)
  }, [team])

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-12">
      <section className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-gray-900">Jobs at IMDb</h1>
        <p className="mt-3 text-lg text-gray-600">
          Find a simple role and apply with one click.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {["All", "Engineering", "Editorial", "Design", "Marketing"].map((item) => (
            <button
              key={item}
              onClick={() => setTeam(item)}
              className={`rounded-full px-5 py-2 font-bold ${
                team === item
                  ? "bg-black text-white"
                  : "bg-white text-gray-800 hover:bg-gray-200"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {applied && (
          <p className="mt-6 rounded-lg bg-green-100 p-4 font-semibold text-green-700">
            Application submitted for {applied}.
          </p>
        )}

        <div className="mt-8 grid gap-5">
          {filteredJobs.map((job) => (
            <article
              key={job.title}
              className="flex flex-wrap items-center justify-between gap-4 rounded-xl bg-white p-6 shadow"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{job.title}</h2>
                <p className="mt-2 text-gray-600">
                  {job.team} - {job.location}
                </p>
              </div>
              <button
                onClick={() => setApplied(job.title)}
                className="rounded bg-yellow-400 px-5 py-3 font-bold text-black hover:bg-yellow-300"
              >
                Apply
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Jobs
